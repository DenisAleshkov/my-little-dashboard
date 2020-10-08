import React from 'react'
import './RepositoriesCard.css'

const RepositoriesCard = ({
    forksCount,
    htmlUrl,
    language,
    name,
    stars,
    update,
    watchers,
    avatar
}) => {
    return (
        <div className="repos-card repos">
            <div className="repos-title">
                {name}
            </div>
            <div className="repos-body">
                <div className="repos-body-language">
                    <span>{language}</span>
                </div>
                <div className="repos-body-forksCount">
                    <span>{forksCount}</span>
                </div>
                <div className="repos-body-stars">
                    <span>{stars}</span>
                </div>
                <div className="repos-body-update">
                    <span>{update}</span>
                </div>
                <div className="repos-body-watchers">
                    <span>{watchers}</span>
                </div>
            </div>
            <a href={htmlUrl}>link to repositories</a>
        </div>
    )}

export default RepositoriesCard