import React from 'react'
import { Alert } from 'react-bootstrap'
import Generate from './../../utils/Date'

const Events = ({ name, type, date }) => {
  const myDate = new Date(date)
  return (

    <Alert variant="info">
      <div>name: {name}</div>
      <div>type : {type} </div>
      <div>date : {`
        ${myDate.getDate()}  
        ${Generate.MONTHS[myDate.getMonth()]} 
        ${Generate.WEEK[myDate.getDay()]}
        ${myDate.getFullYear()}
        `} </div>
    </Alert>

  )
}

export default Events