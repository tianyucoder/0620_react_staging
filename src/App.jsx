import React,{Component} from 'react'
import axios from 'axios'

export default class App extends Component{
  state = {
    isLoading:true, //标识是否为loading状态，为true界面展示loading
    repoName:'',//仓库名
    repoUrl:'',//仓库地址
    error:''//错误信息(不一定有值)
  }
  render(){
    return (
      <h1>Loading......</h1>
    )
  }
  componentDidMount(){
    //用axios发送ajax请求
    axios.get('https://api.github.com/search/repositories?q=v&sort=stars')
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }
}

