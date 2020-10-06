import React from 'react'
import { Alert } from 'react-bootstrap'
const Events = ({ name, type, date }) =>{
    return (
      
        <Alert  variant="info">
        <div>name: {name}</div>
       <div>type : {type} </div>
        <div>date : {date} </div>
      </Alert>
     
    )
}

export default Events