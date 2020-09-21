import React from 'react'
import { Jumbotron } from 'react-bootstrap'

const RepositoriesCard = ({
            forksCount,
            htmlUrl,
            language,
            name,
            stars ,
            update,
            watchers,
}) => {
    return (
        <Jumbotron>
            <h1>Name:{name}</h1>
            <h1>Stars:{stars}</h1>
            <h1>Watchers:{watchers}</h1>
            <h1>Language:{language}</h1>
            <h1>forks:{forksCount}</h1>
            <h1>Update:{update}</h1>
            <p>
                <a href={htmlUrl}>Link to repositories</a>
            </p>

        </Jumbotron>
    )
}

export default RepositoriesCard