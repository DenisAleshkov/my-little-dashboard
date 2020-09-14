import React from 'react'
import { Toast } from 'react-bootstrap'
const Events = (props) => {
    return (
        <Toast>
            <div className="toast-header">
                <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                <strong className="mr-auto">{props.type}</strong>
                <small>{props.date}</small>
            </div>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
        </Toast>
    )
}

export default Events