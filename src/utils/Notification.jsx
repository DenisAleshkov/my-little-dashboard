import React from 'react'
import swal from 'sweetalert2'
import { withSwalInstance } from 'sweetalert2-react'
import './Error.css'



const Notification = ({type, text, title }) => {
    const SweetAlert = withSwalInstance(swal);
    const [show, setShow] = React.useState(true)

    return (
        <SweetAlert
            show={show}
            title={title}
            type = {type}
            text={text}
            onConfirm={() => setShow(!show)}
        />
    )
}

export default Notification;