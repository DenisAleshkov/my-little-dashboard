import React, { } from 'react'
import RepositoriesCard from './RepositoriesCard'
import { GithubContext } from './../../context/context'
import PaginationComponent from './../Pagination/Pagination'
import Loading from './../../utils/Loading'

const Repositories = () => {
    const { repos, loading } = React.useContext(GithubContext)
    console.log(repos)
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(10);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = repos.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const  reposList =  currentPosts.map( (r) => {
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
     <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={repos.length}
        paginate={paginate}
      />
        {reposList}
     </>
 )
}
export default Repositories