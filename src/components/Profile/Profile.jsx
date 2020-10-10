import React from 'react'
import FollowingLink from './../Dashboard/FollowingLink'
import FollowersLink from './../Dashboard/FollowersLink'
import { GithubContext } from './../../context/context'
import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'react-bootstrap'
import { Star } from 'react-bootstrap-icons'
import './Profile.css'

const Profile = () => {
    const { info, following, followers } = React.useContext(GithubContext)
  
    return(
        <div className="profile">
          {/* <Image src={info.avatar} roundedCircle style={{width: '100%'}} />
          <LinkContainer to="/stars">
                <Star />
            </LinkContainer>
            <div>{info.login}</div>
            <div>{info.name ?? ''}</div>
            <div>{info.bio ?? ''}</div>
            <div>{info.twitterName ?? ''}</div>
            <FollowingLink following={following} />re
            <FollowersLink  followers={followers} /> */}
            sf
        </div>
    )
}

export default Profile