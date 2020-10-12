import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const FollowingLink = ({following}) => {

 return(
    <LinkContainer to="/following">
        <span>{following.length} following</span>    
  </LinkContainer>
 )
}
export default FollowingLink