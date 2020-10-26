import React from 'react'
import swal from 'sweetalert2'
import { withSwalInstance } from 'sweetalert2-react'
import './Error.css'



const Error = ({ error, later }) => {
    console.log('later', later)
    const SweetAlert = withSwalInstance(swal);
    const [show, setShow] = React.useState(error)
    

    return (

        <SweetAlert
            show={show}
            title='Error'
            type = 'error'
            text='Not Found'
            onConfirm={() => setShow(!show)}
        />
    )
}

export default Error;