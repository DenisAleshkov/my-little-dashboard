import React, { } from "react"
import Events from './Events.jsx'
import { GithubContext } from './../../context/context'
import './Profile.css'

const Profile = () => {
    console.log('Render Profile')

    const { activity } = React.useContext(GithubContext)


    // const events = activity.map( (a) => {
    //     if(new Date(date).getMonth() <= new Date(a.created_at).getMonth())  {
    //         if(new Date(date).getDate()-8 <= new Date(a.created_at).getDate())  {
    //             console.log(new Date(date).getDate()-8)
    //            return(
    //                <Events key={a.id} name={a.repo.name} date={a.created_at}
    //                type = {a.type} />
    //            )
    //     }
    //     else{
    //       if(new Date(date).getMonth() <= new Date(a.created_at).getMonth()){
    //         if(new Date(date).getDate() <= new Date(a.created_at).getDate()) {

    //         }
    //       }
    //     }
    // }
    // })

    const events = activity.map((a) => {
        if (date.getDate() - 7 <= new Date(a.created_at).getDate()
            && date.getMonth() == new Date(a.created_at).getMonth()) {
            return (
                <Events key={a.id} name={a.repo.name} date={a.created_at}
                    type={a.type} />
            )
        }
        else 
        {
            
        }
    })


    return (
        <div className="profile main">
            {events}
        </div>
    )
}
export default Profile