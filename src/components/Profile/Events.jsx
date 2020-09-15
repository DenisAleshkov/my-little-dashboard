import React from 'react'
import { Toast } from 'react-bootstrap'
const Events = ({ payload, type, date, repo }) => {
//    console.log('payload', payload)
    return (
        <Toast>
            <div className="toast-header">
                <strong className="mr-auto">{type}</strong>
                <small>{date}</small>
            </div>
        <Toast.Body>
            <div className="body-text">
                repositories:{ repo }
            </div>
            <div className="body-text">
                type:{type}
            </div>
            <div className="body-text">
                info: 
            </div>
        </Toast.Body>
        
        </Toast>
    )
}

export default Events