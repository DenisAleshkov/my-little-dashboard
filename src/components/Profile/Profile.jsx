import React, { } from "react"
import Events from './Events.jsx'
import { GithubContext } from './../../context/context'
import './Profile.css'

const Profile = () => {
    console.log('Render Profile')

    const { activity } = React.useContext(GithubContext)

    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    

    const date = new Date()
    const events = activity.map((a) => {
        if (date.getDate() - 7 <= new Date(a.created_at).getDate()
            && date.getMonth() <= new Date(a.created_at).getMonth()) {
            return (
                <Events key={a.id} name={a.repo.name} date={a.created_at}
                    type={a.type} />
            )
        }
        else{
            console.log(daysInMonth(8,2020))
            if(daysInMonth(8,2020) + date.getDate() - 7 <= new Date(a.created_at).getDate()
            && date.getMonth() <= new Date(a.created_at).getMonth()+1){
                return (
                    <Events key={a.id} name={a.repo.name} date={a.created_at}
                        type={a.type} />
                )
            }
        }

    })


    return (
        <div className="profile main">
            {events}
        </div>
    )
}
export default Profile