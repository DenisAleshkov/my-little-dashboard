import React from 'react'
import RepositoriesCard from './../Repositories/RepositoriesCard'
import { GithubContext } from './../../context/context'


const StarsRepos = () => {

    const { starred }  = React.useState(GithubContext)
    console.log(starred)
   
    const starRepos = starred.map( r => {
        return <RepositoriesCard 
            key = {r.id}
            forksCount = {r.forks_count}
            htmlUrl = {r.html_url}
            language = {r.language}
            name = {r.name}
            stars =  {r.stargazers_count}
            update = {r.updated_at}
            watchers = {r.watchers_count}
            avatar = { r.owner.avatar_url }
        />
    })

    return(
        <>
            {starRepos}
        </>
    )
}
 
export default StarsRepos