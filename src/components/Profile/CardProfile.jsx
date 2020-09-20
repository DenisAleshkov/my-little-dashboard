import React from 'react'
import './CardProfile.css'

const CardProfile = ({login, avatar}) => {
    return (
        <>
        <div className="outer-div">
            <div className="inner-div">
                <div className="front">
                    <div className="front__bkg-photo"></div>
                    <img className="front__face-photo" src={avatar} />
                    <div className="front__text">
                        <h3 className="front__text-header">{login}</h3>
                        <p className="front__text-para"><i className="fas fa-map-marker-alt front-icons"></i>Seattle</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardProfile
