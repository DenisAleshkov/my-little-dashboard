import React, { } from "react"
import { LinkContainer } from 'react-router-bootstrap'
import { Card, Badge } from 'react-bootstrap'

const FollowersLink = ({followers}) => {

 return(
    <Card body  className="card-follow">
        <LinkContainer to="/followers">
            <h5 variant="primary">
                follower<Badge className="badge-follow" variant="info">{ followers.length }</Badge>  
            </h5>
        </LinkContainer>
    </Card>
    
 )
}
export default FollowersLink
