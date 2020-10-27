import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Badge } from 'react-bootstrap'
const FollowingLink = ({following}) => {

 return(
    <Card body className="card-follow">
        <LinkContainer to="/followers">
            <h5 variant="primary">
                following<Badge className="badge-follow" variant="info">{ following.length }</Badge>
            </h5>
        </LinkContainer>
    </Card>
 )
}
export default FollowingLink