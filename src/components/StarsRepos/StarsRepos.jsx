import React from 'react'
import RepositoriesCard from './../Repositories/RepositoriesCard'
import { GithubContext } from './../../context/context'
import { Container, Row } from 'react-bootstrap'
import './StarsRepos.css'

const StarsRepos = () => {

    const { starred } = React.useContext(GithubContext)
    console.log(starred)

    const starRepos = starred.map(r => {
        return <RepositoriesCard
            key={r.id}
            forksCount={r.forks_count}
            htmlUrl={r.html_url}
            language={r.language}
            name={r.name}
            stars={r.stargazers_count}
            watchers={r.watchers_count}
            avatar={r.owner.avatar_url}
        />
    })

    return (
        <>
            <div className="repositories main">
                <Container className="star main" fluid>
                    <Row className="card-wrapper">
                        {starRepos}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default StarsRepos