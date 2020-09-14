import React, { } from "react"
import Events from './Events.jsx'
import { GithubContext } from './../../context/context'


const Profile = () => {
    
 const { activity } = React.useContext(GithubContext)  

    const eventsUser = activity.map((a)=>{
        return <Events 
                    key = {a.id} 
                    type = {a.type} 
                    date = {a.created_at}
                    repo = {a.repo}
                />
    })

 console.log('Com Activity',activity)

 return(
     <>
         {eventsUser}
        <Events />
     </>
 )
}
export default Profile