import React, {Component} from 'react'
import './Item.css'
import PropTypes from 'prop-types'

export default class Item extends Component {
  static propTypes = {
    deleteComment:PropTypes.func.isRequired,
  }
  delete = ()=>{
    let {deleteComment} = this.props
     //1.获取该条评论的唯一标识--id
    let {id} = this.props
    //2.询问
    if(window.confirm('确定删除吗')){
      //3.更新App里的状态，移除该id所对应的那个评论对象
      deleteComment(id)
    }
  }
  render() {
    let {userName,content} = this.props
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="#1" onClick={this.delete}>删除</a>
        </div>
        <p className="user"><span >{userName}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}