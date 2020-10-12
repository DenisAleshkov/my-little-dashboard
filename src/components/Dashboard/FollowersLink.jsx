import React, { } from "react"
import { LinkContainer } from 'react-router-bootstrap'


const FollowersLink = ({followers}) => {

 return(
     <LinkContainer to="/followers">
        <span>{ followers.length } follower</span>
    </LinkContainer>
 )
}
export default FollowersLink
