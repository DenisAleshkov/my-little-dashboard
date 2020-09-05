import React from 'react'

const GithubContext = React.createContext() 

const GithubProvider = ({ children }) => {

    const [githubUser, setGithubUser] = React.useState('')
    const [repos, setRepos] = React.useState('')
    const [followers, setFollowers] = React.useState('')

    const [loading, setLoading] = React.useState(false)

    const searchGithubUser =  async (user) => {
        setLoading(true)
        const response = await fetch(`${process.env.ROOT_URL}/users/${user}`)
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
