import React from 'react'
import { ProgressBar, Badge  } from 'react-bootstrap'
import './Dashboard.css'
const ProgressRequest = ({request}) => {
    const now = (request*100)/60;
    return(
        <>
            <h5 variant="primary">
             Remaining request <Badge variant="info">{request}</Badge>
            </h5>
            <ProgressBar now={now} />
        </>
    )
}

export default ProgressRequest