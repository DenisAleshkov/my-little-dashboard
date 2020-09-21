import React, { } from 'react'
import RepositoriesCard from './RepositoriesCard'
import { GithubContext } from './../../context/context'

const Repositories = () => {
    const { repos } = React.useContext(GithubContext)
    console.log(repos)
    const  reposList =  repos.map( (r) => {
        return <RepositoriesCard 
            key = {r.id}
            forksCount = {r.forks_count}
            htmlUrl = {r.html_url}
            language = {r.language}
            name = {r.name}
            stars =  {r.stargazers_count}
            update = {r.updated_at}
            watchers = {r.watchers_count}

        />
    } )

 return(
     <>
        {reposList}
     </>
 )
}
export default Repositories