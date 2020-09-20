import React, { } from 'react'
import { GithubContext } from './../../context/context'

const Repositories = () => {
    const { repos } = React.useContext(GithubContext)
    console.log(repos)
 return(
     <>
     <div>

     </div>
     <div>

     </div>
     <div>

     </div>
     </>
 )
}
export default Repositories