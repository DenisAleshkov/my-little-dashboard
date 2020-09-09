import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {

    const [repos, setRepos] = React.useState([]);
    const [followers, setFollowers] = React.useState('');
    const [following, setFollowing] = React.useState('');
    const [avatar, setAvatar] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [login, setLogin] = React.useState('');

    

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
            
            const responseRepos = await fetch(`https://api.github.com/users/${user}/repos`)
            const dataRepos = await responseRepos.json()
           
            setRepos(dataRepos)

           


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
             repos
        }}>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
