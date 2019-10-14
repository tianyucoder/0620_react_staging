import React,{Component} from 'react'
import Search from './component/search/Search'
import List from './component/list/List'

export default class App extends Component{
  render(){
    return (
      <div className="container">
        <Search/>
        <List/>
      </div>
    )
  }
}

