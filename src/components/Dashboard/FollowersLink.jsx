import React, { } from "react"
import { Card } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const FollowersLink = ({followers}) => {

 return(
     <LinkContainer to="/followers">
        <Card style={{ width: '18rem'}}>
        <Card.Body style={{ cursor: 'pointer'}}>
            <Card.Title>Followers</Card.Title>
            <Card.Text>
               { followers.length }
            </Card.Text>
        </Card.Body>
    </Card>
  </LinkContainer>
 )
}
export default FollowersLink
