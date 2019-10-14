import React, {Component} from 'react'
import {Link,Route} from 'react-router-dom'
import HomeMessageDetail from './HomeMessageDetail'

export default class HomeMessage extends Component {
  state = {
    messages:[
      {id: 1, title: '消息1'},
      {id: 2, title: '消息2'},
      {id: 3, title: '消息3'},
      {id: 4, title: '消息4'},
    ]
  }
  render() {
    let {messages} = this.state
    return (
      <div>
        <ul>
          {
            messages.map((item)=> (
              <li key={item.id}>
                <Link to={`/home/message/message_detail/${item.id}`}>{item.title}</Link>&nbsp;&nbsp;
                <button>push查看</button>&nbsp;&nbsp;
                <button>replace查看</button>
              </li>
            ))
          }
        </ul>
        <button>回退</button>
        <hr/>
        <Route path="/home/message/message_detail/:id" component={HomeMessageDetail}/>
      </div>
    )
  }
}