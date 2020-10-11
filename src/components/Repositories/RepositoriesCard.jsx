import React from 'react'
import { Image } from 'react-bootstrap'
import './RepositoriesCard.css'

const RepositoriesCard = ({
    forksCount,
    htmlUrl,
    language,
    name,
    stars,
    watchers,
    avatar
}) => {
    return (
        <div className="frame">
        <div className="center">
              <div className="profile">
                  <div className="image">
                    <Image src={avatar} roundedCircle className="repos-avatar" />
                  </div>
                  
                  <div className="name">{name}</div>
                    <div className="language">{language}</div>
                  
                  <div className="actions">
                      <a href={htmlUrl} className="btn">Link to repositories</a>
                  </div>
              </div>
              
              <div className="stats-card">
                  <div className="box">
                      <span className="value">{stars}</span>
                      <span className="parameter">Stars</span>
                  </div>
                  <div className="box">
                      <span className="value">{watchers}</span>
                      <span className="parameter">watchers</span>
                  </div>
                  <div className="box">
                      <span className="value">{forksCount}</span>
                      <span className="parameter">Forks Count</span>
                  </div>
              </div>
        </div>
      </div>
    )}

export default RepositoriesCard