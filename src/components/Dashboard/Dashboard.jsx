import React from 'react';
import SearchUser from './SearchUser';
import Followers from './Followers';
import Following from './Following';
import { GithubContext } from './../../context/context';

const Dashboard = () => {

    const { following, followers } = React.useContext(GithubContext);

    return(
       <div className="dashboard">
        <SearchUser />
        <Followers followers = {followers}/>
        <Following following = {following}/>
       </div>
    )
}

export default Dashboard;