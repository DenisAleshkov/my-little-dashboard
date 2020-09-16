import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {

    const [repos, setRepos] = React.useState([])
    const [followers, setFollowers] = React.useState('')
    const [following, setFollowing] = React.useState('')
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
        if(dataUser){

            setAvatar(dataUser.avatar_url)
            setFollowers(dataUser.followers)
            setFollowing(dataUser.following)
            setLogin(dataUser.login)
            
            const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=100`)
            const dataRepos = await responseRepos.json()
           
            setRepos(dataRepos)
            // console.log('Repos:',dataRepos)

            const responseActivity = await fetch(`https://api.github.com/users/${user}/received_events`)
            const dataActivity = await responseActivity.json()

            setActivity(dataActivity)

            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const rewUrl = `http://github-calendar.herokuapp.com/commits/last/${user}`
            const responseContrib = await fetch(proxyUrl + rewUrl)
            const dataContrib =  await responseContrib.json()

            setContributions(dataContrib.data)


            
            // console.log('Activity:',dataActivity)
        }
        setLoading(false)
    }


    React.useEffect(()=>{
        // searchGithubUser('bradtraversy')
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
