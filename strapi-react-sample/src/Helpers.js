import axios from 'axios'
import config from './config'

const baseURL = config.baseURL
const perPage = config.perPage

const helpers = {

  getPosts: (page) => {
    let getPage = page || 1
    let start = perPage * (getPage - 1)
    return axios.get(baseURL + '/posts?_start=' + start + '&_limit=' + perPage)
  },

  getPost: (slug) => {
    return axios.get(baseURL + '/posts?slug=' + slug)
  },

  getNumberOfPosts: () => {
    return axios.get(baseURL + '/posts/count')
  },

  getNumberOfPages: (numberOfPosts) => {
    if (numberOfPosts === 0) {
      return 1
    }
    return Math.ceil(numberOfPosts / perPage)
  }

}

export default helpers
