import React, { } from "react"
import { Card } from 'react-bootstrap'

const Followers = ({followers}) => {

 return(
     <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Followers</Card.Title>
            <Card.Text>
                {followers}
            </Card.Text>
        </Card.Body>
    </Card>
  </>
 )
}
export default Followers