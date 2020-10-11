import React from 'react'
import FollowingLink from './../Dashboard/FollowingLink'
import FollowersLink from './../Dashboard/FollowersLink'
import { GithubContext } from './../../context/context'
import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'react-bootstrap'
import { Star } from 'react-bootstrap-icons'
import './Profile.css'

const Profile = () => {
    const { info, following, followers, starred } = React.useContext(GithubContext)
    console.log('starred', starred)
   
    return(
        <div className="profile">
            <Image src={info.avatar} roundedCircle style={{width: '278x'}} />
            <LinkContainer to="/stars">
               <span className="star-icon">
                   <Star className="star-svg"/>
                   {starred.length}
                </span>
            </LinkContainer>
            <span>{info.login}</span>
            <span>{info.name ?? ''}</span>
            <span>{info.bio ?? ''}</span>
            <a href={info.twitterName
                ?`https://twitter.com/${info.twitterName }`
                :''
            }>{info.twitterName ? `@${info.twitterName}`:''}</a>
            <FollowingLink following={following} />
            <FollowersLink  followers={followers} />
        </div>
    )
}

export default Profile