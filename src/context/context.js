import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {
    
    const [repos, setRepos] = React.useState([])
    const [info, setInfo] = React.useState({})
    const [starred, setStarred] = React.useState([])
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

            setInfo({
                avatar: dataUser.avatar_url,
                login: dataUser.login,
                bio: dataUser.bio,
                blog: dataUser.blog,
                twitterName: dataUser.twitter_username,
                name: dataUser.name
            })

            

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

            const responseStarred = await fetch(`https://api.github.com/users/${user}/starred`)
            const dataStarred = await responseStarred.json()
            setStarred(dataStarred)
           
            
            setError(false)
            
        }
         else{
             console.log('Catch Error!')
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
             contributions,
             starred,
             info
        }}>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
