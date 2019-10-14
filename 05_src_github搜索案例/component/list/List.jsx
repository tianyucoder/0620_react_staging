import React, {Component} from 'react'
import Item from '../item/Item'

export default class List extends Component {
  render() {
    let {isFirst,isLoading,users,error} = this.props
    if(isFirst){
      return <h2>输入用户名，点击查询</h2>
    }else if(isLoading){
      return <h2>Loading......</h2>
    }else if(error){
      return <h2 style={{color:'red'}}>{error}</h2>
    }else{
      return (
        <div className="row">
          {
            users.map((item)=> <Item key={item.login} {...item}/> )
          }
        </div>
      )
    }
  }
}