import React, { } from 'react'
import RepositoriesCard from './RepositoriesCard'
import { GithubContext } from './../../context/context'
import PaginationComponent from './../Pagination/Pagination'
import Loading from './../../utils/Loading'

const Repositories = () => {
    const { repos, loading } = React.useContext(GithubContext)
    console.log(repos)
   
    const [currentPage, setCurrentPage] = React.useState(1);
    const [reposPerPage] = React.useState(5);

    const indexOfLastRepos = currentPage * reposPerPage;
    const indexOfFirstRepos = indexOfLastRepos - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepos, indexOfLastRepos);

    const paginate = pageNumber => setCurrentPage(pageNumber);
    if(loading) {
        return <Loading />
    }
    const  reposList =  currentRepos.map( (r) => {
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
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
        {reposList}
      <PaginationComponent
        reposPerPage={reposPerPage}
        totalRepos={repos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
     </>
 )
}
export default Repositories