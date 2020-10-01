import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {

    const [repos, setRepos] = React.useState([])
    const [followers, setFollowers] = React.useState([])
    const [following, setFollowing] = React.useState([])
    const [avatar, setAvatar] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [login, setLogin] = React.useState('')
    const [activity, setActivity] = React.useState([])
    const [contributions, setContributions ] = React.useState([])
    

    const searchGithubUser =  async (user) => {
        console.log('search')
        setLoading(true)

        const responseUser = await fetch(`https://api.github.com/users/${user}`)
        .catch( (err) => console.log('err',err))

        const dataUser = await responseUser.json()

        console.log(dataUser)

        if(responseUser.ok){

            setAvatar(dataUser.avatar_url)
            setLogin(dataUser.login)
            
            const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=50`)
            const dataRepos = await responseRepos.json()
        
            setRepos(dataRepos)

            const responseActivity = await fetch(`https://api.github.com/users/${user}/events`)
            const dataActivity = await responseActivity.json()

            setActivity(dataActivity)

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const rewUrl = `http://github-calendar.herokuapp.com/commits/last/${user}`
            const responseContrib = await fetch(proxyUrl + rewUrl)
            const dataContrib =  await responseContrib.json()

            setContributions(dataContrib.data)
          

            const responseFollowers = await fetch(`https://api.github.com/users/${user}/followers`)
            const dataFollowers = await responseFollowers.json()
            setFollowers(dataFollowers)

            const responseFollowing = await fetch(`https://api.github.com/users/${user}/following`)
            const dataFollowing = await responseFollowing.json()
            setFollowing(dataFollowing)

            setError(false)
            
        }
         else{
             setError(true)
        }
        setLoading(false)
        
    }


    React.useEffect(()=>{
        searchGithubUser('DenisAleshkov')
    }, [])

    return (
         <GithubContext.Provider value={{ 
             searchGithubUser, 
             loading,
             avatar,
             error,
             followers,
             following,
             login,
             repos,
             activity,
             contributions 
        }}>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
