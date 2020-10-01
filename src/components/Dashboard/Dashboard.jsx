import React from 'react'
import SearchUser from './SearchUser'
import FollowersLink from './FollowersLink'
import Following from './Following'
import BreadcrumbComponent from './BreadcrumbComponent'
import { GithubContext } from './../../context/context'
import './Dashboard.css'

const Dashboard = () => {

    const { following, followers } = React.useContext(GithubContext);
    console.log('Render Dashboard')
    return(
       <div className="dashboard main">
           <div className="search-box">
                <BreadcrumbComponent />
              <SearchUser />
           </div>
            <div className="dashboard-follow">
            <FollowersLink followers= { followers }/>
            <Following following = {following}/>
            </div>
       </div>
    )
}

export default Dashboard;