import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import './BreadcrumbComponent.css'

const BreadcrumbComponent = () => {
	return (
		<Breadcrumb>
			<Breadcrumb.Item className="outer">Home</Breadcrumb.Item>
			<Breadcrumb.Item className="total">Dashboard</Breadcrumb.Item>
		</Breadcrumb>
	)
}

export default BreadcrumbComponent