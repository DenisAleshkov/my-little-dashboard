import React from 'react'
import { Card } from 'react-bootstrap'
import { GithubContext } from './../../context/context'
import './Followers.css'

const Followers = () => {
    const { followers } = React.useContext(GithubContext)
    console.log(followers)

    const followersList = followers.map((f, i) => {
        return (
            <div className="follower" key={f.node_id}>
                <img className="follower-image" src={f.avatar_url} />
                <span className="follower-title">{f.login}</span>
            </div>
        )
    })

    return (
        <div className="follower-list main">
            { followersList}
        </div>
    )
}

export default Followers