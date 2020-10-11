import React, { } from "react"
import Events from './Events.jsx'
import Profile from './../Profile/Profile'
import { GithubContext } from '../../context/context'
import { Container, Row, Col } from 'react-bootstrap'
import './Activity.css'

const Activity = () => {
    console.log('Render Profile')

    const { activity } = React.useContext(GithubContext)

    console.log(activity)

    function daysInMonth(month, year) {
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
        else {
            if (daysInMonth(date.getMonth(), date.getFullYear()) + date.getDate() - 7 <= new Date(a.created_at).getDate()
                && date.getMonth() <= new Date(a.created_at).getMonth() + 1) {
                return (
                    <Events key={a.id} name={a.repo.name} date={a.created_at}
                        type={a.type} />
                )
            }
        }

    })
    return (
        <Container className="activity main" fluid>
            <Row>
            <Col className="profile-part" sm={3}><Profile /></Col>
            <Col className="activity-list" sm={9}>{events}</Col>
            </Row>
        </Container>
    )
}
export default  Activity 
