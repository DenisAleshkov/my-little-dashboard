import React from 'react';
import SearchUser from './SearchUser';
import Followers from './Followers';
import Following from './Following';
import { GithubContext } from './../../context/context';
import './Dashboard.css'

const Dashboard = () => {

    const { following, followers } = React.useContext(GithubContext);

    return(
       <div className="dashboard">
        <SearchUser />
        <div className="dashboard-follow">
            <Followers followers = {followers}/>
            <Following following = {following}/>
        </div>
       </div>
    )
}

export default Dashboard;