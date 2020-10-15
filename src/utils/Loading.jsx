import React from 'react'
import { GithubContext } from './../context/context'
import { ProgressBar } from 'react-bootstrap'

export  const Loading = () => {
    
    const { progressLoad }  = React.useContext(GithubContext)
    
    return(
        <div className="spinner-box">
             <ProgressBar now={progressLoad} label={`${progressLoad}%`} />
        </div>
    )
}

export default Loading