import React, { } from "react"
import { Card } from 'react-bootstrap'

const Following = ({following}) => {

 return(
     <>
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>Following</Card.Title>
            <Card.Text>
                {following}
            </Card.Text>
        </Card.Body>
    </Card>
  </>
 )
}
export default Following