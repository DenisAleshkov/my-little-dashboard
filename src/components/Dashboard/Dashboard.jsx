import React from 'react'
import SearchUser from './SearchUser'
import FollowersLink from './FollowersLink'
import FollowingLink from './FollowingLink'
import BreadcrumbComponent from './BreadcrumbComponent'
import Loading from './../../utils/Loading'
import ProgressRequest from './ProgressRequest'
import { GithubContext } from './../../context/context'
import { Row, Col } from 'react-bootstrap'
import './Dashboard.css'

const Dashboard = () => {

    const { request, following, followers, loading } = React.useContext(GithubContext);
    if(loading) {
        return <Loading />
    }
    console.log('Render Dashboard')
    return(
       <div className="dashboard main">
           <div className="search-box">
                <BreadcrumbComponent />
              <SearchUser />
           </div>
            <Row className="dashboard-follow">
                <FollowersLink followers= { followers }/>
                <FollowingLink following = { following }/>
            </Row>
            <Row className="dashboard-req">
                <Col className="req-item" md={4} xs={4}><ProgressRequest request={request}/></Col>
            </Row>
       </div>
    )
}

export default Dashboard;