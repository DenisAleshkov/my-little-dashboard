import React, { } from "react"
import Events from './Events.jsx'
import { GithubContext } from './../../context/context'
import './Profile.css'

const Profile = () => {
    
 const { activity } = React.useContext(GithubContext)  
    const eventsUser = activity.map((a) => {
        return <Events 
                    key = {a.id} 
                    type = {a.type} 
                    date = {a.created_at}
                    repo = {a.repo.name}
                    payload = {a.payload}
                />
    })
    // console.log(activity)
 return(
     <div className="profile main">
         {eventsUser}
     </div>
 )
}
export default Profile