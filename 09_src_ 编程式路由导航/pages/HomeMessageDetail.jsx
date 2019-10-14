import React, {Component} from 'react'

export default class HomeMessageDetail extends Component {
   state = {
     messageArr:[
       {id: 1, title: '消息1对应的详细信息', content: '我爱你, 中国'},
       {id: 2, title: '消息2对应的详细信息', content: '我爱你, 老婆'},
       {id: 3, title: '消息3对应的详细信息', content: '我爱你, 老婆'},
       {id: 4, title: '消息4对应的详细信息', content: '我爱你, 0620'},
     ]
   }

  render() {
    let {messageArr} = this.state
    let {id} = this.props.match.params
    let obj = messageArr.find((item)=>{
        return item.id === id*1
    })
    console.log(obj)
    return (
      <ul>
        <li>ID: {id}</li>
        <li>TITLE: {obj.title}</li>
        <li>CONTENT: {obj.content}</li>
      </ul>

    )
  }
}
