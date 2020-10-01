import React from "react"
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const FollowingLink = ({following}) => {

 return(
    <LinkContainer to="/following">
        <Card style={{ width: '18rem' }}>
        <Card.Body style={{ cursor: 'pointer'}}>
            <Card.Title>Following</Card.Title>
            <Card.Text>
                {following.length}
            </Card.Text>
        </Card.Body>
    </Card>
  </LinkContainer>
 )
}
export default FollowingLink