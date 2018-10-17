import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const HeaderStyle = {
	'maxWidth': '1200px',
	'margin': 'auto'
}

class Header extends Component {
	render() {
		return (
			<div className="w3-top">
				<div className="w3-white w3-xlarge" style={HeaderStyle}>
					<div className="w3-button w3-padding-16 w3-left">
						<Link to='/'>Curso de Strapi</Link>
					</div>
					<div className="w3-button w3-right w3-padding-16">
						<Link to='/about'>About</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default Header
