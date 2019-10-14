import React,{Component} from 'react'
import Add from './component/add/Add'
import List from './component/list/List'

export default class App extends Component{
  state = {
    comments:[
      {id:'8189dg7f78dfu767thkj',userName:'阿野',content:'so easy!'},
      {id:'827cvbipohjjk789988y',userName:'张洪丽',content:'很简单，都不用学'},
      {id:'8378c78dfjkhdfg78980',userName:'程老师',content:'react是啥'}
    ],
  }
  addComment = (commentObj)=>{
    //1.获取原数据
    let comments = [...this.state.comments]
    //2.更新获取的原数据
    comments.unshift(commentObj)
    //3.更新状态
    this.setState({comments})
  }
  deleteComment = (id)=>{
    //1.获取原状态
    let comments = [...this.state.comments]
    //2.从数组中删除指定id所对应的评论对象
    //第一种删除方式
    /*comments.forEach(function (item,index) {
      if(item.id === id){
        comments.splice(index,1)
      }
    })*/
    //第二种删除方式
    comments = comments.filter(function (item) {
      return item.id !== id
    })
    //更新状态
    this.setState({comments})
  }
  render(){
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComment={this.addComment}/>
          <List comments={this.state.comments} deleteComment={this.deleteComment}/>
        </div>
      </div>
    )
  }
}

