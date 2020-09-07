import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {

    const [githubUser, setGithubUser] = React.useState('');
    const [repos, setRepos] = React.useState('');
    const [followers, setFollowers] = React.useState('');
    const [following, setFollowing] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [login, setLogin] = React.useState('');


    const toggleError = () => setError(!error);


    const searchGithubUser =  async (user) => {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${user}`)
        .catch( (err) => console.log('err',err))
        const reponseJSON = await response.json()
        if(reponseJSON){
            setAvatar(reponseJSON.avatar_url)
            setFollowers(reponseJSON.followers)
            setFollowing(reponseJSON.following)
            setLogin(reponseJSON.login)
            console.log('found',reponseJSON)
        }
        setLoading(false)
    }

    React.useEffect(()=>{
        searchGithubUser('DenisAleshkov');
    }, [])

    return (
         <GithubContext.Provider value={{ 
             githubUser, 
             searchGithubUser, 
             loading,
             avatar,
             toggleError,
             error,
             followers,
             following,
             login,
             data
        }}>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
