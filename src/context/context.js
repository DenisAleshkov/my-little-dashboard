import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {
    
    const [repos, setRepos] = React.useState([])
    const [request, SetRequest] = React.useState(0);
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
   

    const [progressLoad, setProgressLoad] = React.useState(0);

    const searchGithubUser =  async (user) => {
        console.log('search')
        setLoading(true)

        const responseUser = await fetch(`https://api.github.com/users/${user}`)
        .catch( (err) => console.log('Error:',err))

        const dataUser = await responseUser.json()

        console.log(dataUser)

        if(responseUser.ok){

            setAvatar(dataUser.avatar_url)
            setProgressLoad(10)
            setLogin(dataUser.login)
            setProgressLoad(20)
            setInfo({
                avatar: dataUser.avatar_url,
                login: dataUser.login,
                bio: dataUser.bio,
                blog: dataUser.blog,
                twitterName: dataUser.twitter_username,
                name: dataUser.name
            })
            setProgressLoad(30)
            
            const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=50`)
            const dataRepos = await responseRepos.json()
        
            setRepos(dataRepos)
            setProgressLoad(40)

            const responseActivity = await fetch(`https://api.github.com/users/${user}/events`)
            const dataActivity = await responseActivity.json()

            setActivity(dataActivity)
            setProgressLoad(50)
            
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
            const rewUrl = `http://github-calendar.herokuapp.com/commits/last/${user}`
            const responseContrib = await fetch(proxyUrl + rewUrl)
            const dataContrib =  await responseContrib.json()

            setContributions(dataContrib.data)
            setProgressLoad(60)
           

            const responseFollowers = await fetch(`https://api.github.com/users/${user}/followers`)
            const dataFollowers = await responseFollowers.json()
            
            setFollowers(dataFollowers)
            setProgressLoad(70)

            const responseFollowing = await fetch(`https://api.github.com/users/${user}/following`)
            const dataFollowing = await responseFollowing.json()
            
            setFollowing(dataFollowing)
            setProgressLoad(80)

            const responseStarred = await fetch(`https://api.github.com/users/${user}/starred`)
            const dataStarred = await responseStarred.json()

            setStarred(dataStarred)
            setProgressLoad(90)

            const responseReq = await fetch(`https://api.github.com/rate_limit`)
            const dataReq = await responseReq.json()
            let { remaining } = dataReq.rate

            SetRequest(remaining)
            setProgressLoad(100)
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
        setError(null)
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
             info,
             request,
             progressLoad
        }}>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
