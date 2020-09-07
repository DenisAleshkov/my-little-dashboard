import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {
    const [githubUser, setGithubUser] = React.useState('')
    const [repos, setRepos] = React.useState('')
    const [followers, setFollowers] = React.useState('')
    const [avatar, setAvatar] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const searchGithubUser =  async (user) => {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${user}`)
        .catch( (err) => console.log(err))
        const reponseJSON = await response.json()
        if(reponseJSON) {
            console.log(reponseJSON)
        }
        setLoading(false)
    }

    return (
         <GithubContext.Provider value={ { githubUser, searchGithubUser, loading } }>
             {children}
         </GithubContext.Provider>   
    )
}

export { GithubContext , GithubProvider}
