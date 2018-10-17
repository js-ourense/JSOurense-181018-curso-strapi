import React, { Component } from 'react'
import helpers from './Helpers'
import Pagination from './Pagination'
import config from './config'
import chunk from 'lodash/chunk'
import Post from './Post'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 1,
      totalPosts: 0,
      posts: []
    }
    // console.log(this.state)
  }

  getThePosts(page) {
    helpers.getPosts(page).then(
      (result) => {
        // console.log(result.data)
        if (result && result.data) {
          this.setState({
            currentPage: page,
            totalPages: result.headers['x-wp-totalpages'],
            totalPosts: result.headers['x-wp-total'],
            posts: result.data
          })
        }
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    let page = nextProps.match.params.number || 1
    let currentPage = this.state.currentPage
    if (page.toString() !== currentPage.toString()) {
      this.getThePosts(page)
    }
  }

  componentDidMount() {
    let page = this.props.match.params.number || 1
    // console.log(page)
    this.getThePosts(page)
  }

  render() {

    const rows = chunk(this.state.posts, config.numOfPostsPerRow)
    const listPosts = rows.map((row, index) =>
      <div key={index} className="w3-row-padding w3-padding-16 w3-center">
          {
            row.map((col) => (
              <Post key={col._id} title={col.title} slug={col.slug} date={col.publish} image={config.baseURL+col.media.url} />
            ))
          }
      </div>
    )

    return (
      <div>
        <Pagination currentPage={`${this.state.currentPage}`} totalPages={`${this.state.totalPages}`} />
        {listPosts}
      </div>
    )
  }
}

export default Home