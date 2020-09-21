import React from 'react';
import { Alert } from 'react-bootstrap';
import { GithubContext } from './../context/context';
import './Error.css'

const Error = ({ error }) => {
    
    const [err, setErr] = React.useState(error);
    const timeoutRef = React.useRef(null);
    const toggleErr = () => setErr(!err);

   React.useEffect(()=>{
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
       
        timeoutRef.current  = setTimeout(()=>{
            timeoutRef.current = null;
            console.log('изменилось')
            setErr(false)
        }, 1500)
        return
   }, [err])

    return(
       
            <Alert  show={err} onClose={toggleErr} variant='danger'>
                Error
            </Alert>
       
    )
}

export default Error;