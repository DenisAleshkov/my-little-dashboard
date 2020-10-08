import React from 'react'
import { GithubContext } from './../../context/context'

const StarsRepos = () => {

    const { starred }  = React.useState(GithubContext)
    console.log(starred)
   
    return(
        <>
            starred
        </>
    )
}
 
export default StarsRepos