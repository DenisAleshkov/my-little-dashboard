import React from 'react'
import { ProgressBar } from 'react-bootstrap'
import './Dashboard.css'
const ProgressRequest = ({request}) => {
    const now = (request*100)/60;
    return(
        <>
            remaining request: {request}
            <ProgressBar animated now={now} />
        </>
    )
}

export default ProgressRequest