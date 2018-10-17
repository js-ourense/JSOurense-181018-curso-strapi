import React, { Component } from 'react'
import Post from './Post'

class Row extends Component {

  render() {
    return (
      <div className="w3-row-padding w3-padding-16 w3-center">
        <Post title="Test" slug="hello-world"/>
      </div>
    );
  }
}

export default Row