import React from 'react'
import { ArrowLeft } from 'react-bootstrap-icons';
import { LinkContainer } from 'react-router-bootstrap'
import './ToBack.css'

const ToBack = ({link}) => {
	return(
		<LinkContainer to={link}>
			<ArrowLeft className="arrow-left"/>
		</LinkContainer>
	)
}

export default ToBack