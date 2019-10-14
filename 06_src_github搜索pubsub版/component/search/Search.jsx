import React, {Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = ()=>{
    //1.获取输入
    let keyWord = this.refs.keyWordNode.value
    //2.校验数据
    if(!keyWord){
      return
    }
    //3.修改List状态中的loading为true---????
    PubSub.publish('updateListState',{
      isFirst:false,
      isLoading:true,
      users:[],
      error:''
    })
    /*updateAppState({
      isFirst:false,
      isLoading:true,
      users:[],
      error:''
    })*/
    //4.发请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then((response)=> {
        let {data} = response
        //修改List状态----????
        PubSub.publish('updateListState',{
          isFirst:false,
          isLoading:false,
          users:data.items,
          error:''
        })
        /*updateAppState({
          isFirst:false,
          isLoading:false,
          users:data.items,
          error:''
        })*/
      })
      .catch((error)=>{
        //修改List状态----????
        PubSub.publish('updateListState',{
          isFirst:false,
          isLoading:false,
          users:'',
          error:error.message
        })
        /*updateAppState({
          isFirst:false,
          isLoading:false,
          users:'',
          error:error.message
        })*/
      })
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="keyWordNode"/>&nbsp;<button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}


