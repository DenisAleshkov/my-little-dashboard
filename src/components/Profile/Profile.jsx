import React from 'react'
import { GithubContext } from './../../context/context'
import {Image} from 'react-bootstrap'
import './Profile.css'

const Profile = () => {
    const {info } = React.useContext(GithubContext)
    console.log(info)
    return(
        <>
          {/* <Image src={avatar} roundedCircle style={{width: 'inherit'}} />
       
            <span>{login}</span> */}
            Profile
        </>
    )
}

export default Profile