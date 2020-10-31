import React from 'react'
import { fetchData } from './helpFunction'
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
            
            
            const repos = await fetchData(`https://api.github.com/users/${user}/repos?per_page=50`)
            setRepos(repos)

            setProgressLoad(40)

            const activity =  await fetchData(`https://api.github.com/users/${user}/events`)
            setActivity(activity)

            setProgressLoad(50)

         
            const contributions =  await fetchData('https://cors-anywhere.herokuapp.com/'+`http://github-calendar.herokuapp.com/commits/last/${user}`)
            setContributions(contributions.data)
            setProgressLoad(60)
           

            const followers = await fetchData(`https://api.github.com/users/${user}/followers`)
            setFollowers(followers)
            setProgressLoad(70)

            const following = await fetchData(`https://api.github.com/users/${user}/following`)
           
            setFollowing(following)
            setProgressLoad(80)

            const Starred = await fetchData(`https://api.github.com/users/${user}/starred`)

            setStarred(Starred)
            setProgressLoad(90)

            const request = await fetchData(`https://api.github.com/rate_limit`)
         
            let { remaining } = request.rate

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
