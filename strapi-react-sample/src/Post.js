import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const postStyle = {
  'width': '100%'
}

class Post extends Component {
  render() {
    return (
      <div className="w3-quarter">
        <img src={`${this.props.image}`} alt={`${this.props.slug}`} style={postStyle} />
        <h3><Link to={`/${this.props.slug}`}>{this.props.title}</Link></h3>
      </div>
    );
  }
}

export default Post