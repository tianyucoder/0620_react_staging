import React, {Component} from 'react'
import './Item.css'

export default class Item extends Component {
  render() {
    let {login,html_url,avatar_url} = this.props
    return (
      <div className="card">
        <a href={html_url} rel="noopener noreferrer">
          <img src={avatar_url} style={{width: '100px'}} alt="图片加载失败"/>
        </a>
        <p className="card-text">{login}</p>
      </div>
    )
  }
}