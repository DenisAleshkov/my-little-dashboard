import React from 'react';
import { Alert } from 'react-bootstrap';
import { GithubContext } from './../context/context';
import './Error.css'

const Error = () => {

    const { error } = React.useContext(GithubContext);
    
    const [err, setErr] = React.useState(error);

    const refFromErr = React.useRef()

    const toggleErr = () => setErr(!err);


    return(
       
            <Alert ref={refFromErr} show={err} onClose={toggleErr} variant='danger'>
                Error
            </Alert>
       
    )
}

export default Error;