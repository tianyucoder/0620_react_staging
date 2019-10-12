import React,{Component} from 'react'
import uuid from 'uuid'
import PropTypes from 'prop-types'

export default class Add extends Component{
  myRef = React.createRef()
  static propTypes = {
    addComment:PropTypes.func.isRequired
  }
  add = ()=>{
    let {addComment} = this.props
    //1.获取用户输入
    let userName = this.userName.value
    let content = this.myRef.current.value
    //2.校验
    if(userName === '' || content === ''){
      alert('名字和内容均不能为空')
      return
    }
    //3.更新状态
    addComment({id:uuid(),userName,content})
    //4.清空
    this.userName.value = ''
    this.myRef.current.value = ''
  }
  render(){
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input ref={(input)=>{this.userName = input}} type="text" className="form-control" placeholder="用户名"/>
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea ref={this.myRef} className="form-control" rows="6" placeholder="评论内容"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
