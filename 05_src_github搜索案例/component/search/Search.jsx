import React, {Component} from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = ()=>{
    //获取更新App状态的方法
    let {updateAppState} = this.props
    //1.获取输入
    let keyWord = this.refs.keyWordNode.value
    //2.校验数据
    if(!keyWord){
      return
    }
    //3.修改loading为true
    updateAppState({
      isFirst:false,
      isLoading:true,
      users:[],
      error:''
    })
    //4.发请求
    axios.get(`https://api.github.com/search/users?q=${keyWord}`)
      .then((response)=> {
        let {data} = response
        updateAppState({
          isFirst:false,
          isLoading:false,
          users:data.items,
          error:''
        })
      })
      .catch((error)=>{
        updateAppState({
          isFirst:false,
          isLoading:false,
          users:'',
          error:error.message
        })
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