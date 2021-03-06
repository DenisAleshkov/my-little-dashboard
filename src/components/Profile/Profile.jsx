import React from 'react'
import FollowingLink from './../Dashboard/FollowingLink'
import FollowersLink from './../Dashboard/FollowersLink'
import { GithubContext } from './../../context/context'
import { LinkContainer } from 'react-router-bootstrap'
import { Image } from 'react-bootstrap'
import { Star, Person } from 'react-bootstrap-icons'
import './Profile.css'

const Profile = () => {
    const { info, starred, following, followers } = React.useContext(GithubContext)

    return (
        <div className="profile">
            <div className="profile-card">
                <Image src={info.avatar} roundedCircle className="github-avatar" />
                <div className="profile-link">

                    <div className="profile-following">
                    <Person />
                        <LinkContainer to="/followers">
                            <span>{followers.length}follower</span>
                        </LinkContainer>
                    </div>

                    <div className="profile-follower">
                        <LinkContainer to="/followers">
                            <span>{following.length}following</span>
                        </LinkContainer>
                    </div>

                    <LinkContainer to="/stars">
                        <span className="star-icon">
                            <Star className="star-svg" />
                            {starred.length}
                        </span>
                    </LinkContainer>
                </div>
                <span>{info.login}</span>
                <span>{info.name ?? ''}</span>
                <span>{info.bio ?? ''}</span>
                <a href={info.twitterName
                    ? `https://twitter.com/${info.twitterName}`
                    : ''
                }>{info.twitterName ? `@${info.twitterName}` : ''}</a>
            </div>   </div>

    )
}

export default Profile