import React from 'react'
import ToBack  from './../../utils/ToBack'
import { GithubContext } from './../../context/context'
import './Follow.css'

const Followers = () => {
    const { followers } = React.useContext(GithubContext)
    console.log(followers)

    const followersList = followers.map( f => {
        return (
            <div className="follow" key={f.node_id}>
                <img className="follow-image" src={f.avatar_url} />
                <span className="follow-title">{f.login}</span>
            </div>
        )
    })

    return (
        <div className="follow-list main">
            <ToBack link="/dashboard" />
           { followersList}
        </div>
    )
}

export default Followers