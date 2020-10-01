import React from 'react'
import SearchUser from './SearchUser'
import FollowersLink from './FollowersLink'
import FollowingLink from './FollowingLink'
import BreadcrumbComponent from './BreadcrumbComponent'
import Loading from './../../utils/Loading'
import { GithubContext } from './../../context/context'
import './Dashboard.css'

const Dashboard = () => {

    const { following, followers, loading } = React.useContext(GithubContext);
    if(loading) {
        return <Loading />
    }
    console.log('Render Dashboard')
    return(
       <div className="dashboard main">
           <div className="search-box">
                <BreadcrumbComponent />
              <SearchUser />
           </div>
            <div className="dashboard-follow">
            <FollowersLink followers= { followers }/>
            <FollowingLink following = { following }/>
            </div>
       </div>
    )
}

export default Dashboard;