import React from 'react'
import ToBack from './../../utils/ToBack.jsx'
import { GithubContext } from './../../context/context'
import './Follow.css'

const Following = () => {
    
    const { following } = React.useContext(GithubContext)

    const followingList = following.map( f => {
        return (
            <div className="follow" key={f.node_id}>
                <img className="follow-image" src={f.avatar_url} />
                <span className="follow-title">{f.login}</span>
            </div>
        )
    })

    return (
        <div className="follow-list main">
            <ToBack link="/dashboard"/>
            { followingList}
        </div>
    )
}

export default Following