import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Pagination extends Component {

	getLink(currentPage, getPage) {
		if (currentPage.toString() !== getPage.toString()) {
			return <Link to={`/page/${getPage}`}>{getPage}</Link>
		} else {
			return getPage
		}
	}

	getFirstLink(currentPage) {
		if (currentPage > 1) {
			let goToPage = currentPage - 1
			return <div className="w3-bar-item w3-button w3-hover-black"><Link to={`/page/${goToPage}`}>«</Link></div>
		}
	}

	getLastLink(currentPage, totalPages) {
		if (currentPage < totalPages) {
			let goToPage = parseInt(currentPage, 10) + 1
			return <div className="w3-bar-item w3-button w3-hover-black"><Link to={`/page/${goToPage}`}>»</Link></div>
		}
	}

	render() {
		const currentPage = this.props.currentPage
		const totalPages = this.props.totalPages
		var pages = []
		for (var i = 1; i <= totalPages; i++) {
			pages.push(i);
		}
		const listPages = pages.map((page) =>
			<div key={page.toString()} className="w3-bar-item w3-button w3-hover-black">
			   {this.getLink(currentPage, page)}
			</div>
		)

		return (
			<div className="w3-center w3-padding-32">
				<div className="w3-bar">
					{this.getFirstLink(currentPage)}
					{listPages}
					{this.getLastLink(currentPage, totalPages)}
				</div>
			</div>
		)
	}
}

export default Pagination
