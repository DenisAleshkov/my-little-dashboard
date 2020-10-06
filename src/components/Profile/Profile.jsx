import React from 'react'
import FollowingLink from './../Dashboard/FollowingLink'
import FollowersLink from './../Dashboard/FollowersLink'
import { GithubContext } from './../../context/context'
import {Image} from 'react-bootstrap'
import './Profile.css'

const Profile = () => {
    const { info, following, followers } = React.useContext(GithubContext)
    console.log(info)
    return(
        <div className="profile">
          <Image src={info.avatar} roundedCircle style={{width: '100%'}} />
    
            <div>{info.login}</div>
            <div>{info.name ?? ''}</div>
            <div>{info.bio ?? ''}</div>
            <div>{info.twitterName ?? ''}</div>
            <FollowingLink following={following} />
            <FollowersLink  followers={followers} />
           
        </div>
    )
}

export default Profile