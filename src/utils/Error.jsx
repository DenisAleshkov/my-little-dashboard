import React from 'react';
import { Alert } from 'react-bootstrap';
import './Error.css'

const Error = ({ error }) => {
    console.log('error', error)
    const [err, setErr] = React.useState(error);
    
    let interval = null
    React.useEffect(()=>{
        interval = setTimeout(() => setErr(false), 2000)
        return () => clearInterval(interval);
 
    }, [])
    console.log('error', error)

    const toggleErr = () => setErr(!err);

   

    return(
            <Alert  show={err} onClose={toggleErr} variant='danger'>
                Error
            </Alert>
    )
}

export default Error;