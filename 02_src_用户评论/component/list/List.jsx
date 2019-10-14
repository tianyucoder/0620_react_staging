import React,{Component} from 'react'
import Item from '../item/Item'
import './List.css'
import PropTypes from 'prop-types'

export default class List extends Component{
  static propTypes = {
    comments:PropTypes.array.isRequired,
    deleteComment:PropTypes.func.isRequired,
  }
  render(){
    let {comments,deleteComment} = this.props
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display: comments.length === 0 ? 'block':'none'}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map(function (item) {
              return <Item key={item.id} {...item} deleteComment={deleteComment}/>
            })
          }
        </ul>
      </div>
    )
  }
}