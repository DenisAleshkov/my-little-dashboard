import React from 'react';
import SearchUser from './SearchUser';
import { GithubContext } from './../../context/context';

const Dashboard = () => {

    const { following, followers } = React.useContext(GithubContext);

    return(
       <div className="dashboard">
        <SearchUser />
        <span>following: {following}</span>
        <span>followers: {followers}</span>
       </div>
    )
}

export default Dashboard;