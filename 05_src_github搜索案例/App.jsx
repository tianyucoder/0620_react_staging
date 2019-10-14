import React,{Component} from 'react'
import Search from './component/search/Search'
import List from './component/list/List'

export default class App extends Component{
  state = {
    isFirst:true,
    isLoading:false,
    users:[],
    error:''
  }
  //专门用于更新App的状态---给其他组件用的
  updateAppState = (appSateObj)=>{
    let {isFirst,isLoading,users,error} = appSateObj
    this.setState({
      isFirst,
      isLoading,
      users,
      error,
    })
  }
  render(){
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}

