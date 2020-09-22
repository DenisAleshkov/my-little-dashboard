import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const RepositoriesCard = ({
            forksCount,
            htmlUrl,
            language,
            name,
            stars ,
            update,
            watchers
}) => {
    return (
        <Jumbotron>
            <span>Name:{name}</span>
            <span>Stars:{stars}</span>
            <span>Watchers:{watchers}</span>
            <span>Language:{language}</span>
            <span>forks:{forksCount}</span>
            <span>Update:{update}</span>
            <p>
                <a href={htmlUrl}>Link to repositories</a>
            </p>

        </Jumbotron>
    )
}

export default RepositoriesCard