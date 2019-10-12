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
    this.keyWord = 'v'
    let {isLoading,repoName,repoUrl,error} = this.state
    if(isLoading){
      return <h1>Loading......</h1>
    }else if(repoName && repoUrl){
      return <h1>github上包含“{this.keyWord}”关键词的仓库中点赞最多的是：<a href={repoUrl}>{repoName}</a></h1>
    }else if(error){
      return <h1 style={{color:'red'}}>{error}</h1>
    }
  }
  componentDidMount(){
    //用axios发送ajax请求
    axios.get(`https://api.github.com/search/repositories?q=${this.keyWord}&sort=stars`)
      .then((response)=> {
        let {data} = response
        console.log(data);
        this.setState({
          isLoading:false, //标识是否为loading状态，为true界面展示loading
          repoName:data.items[0].name,//仓库名
          repoUrl:data.items[0].html_url,//仓库地址
          error:''//错误信息(不一定有值)
        })
      })
      .catch((error)=> {
        console.log(error,typeof error);
        this.setState({
          isLoading:false, //标识是否为loading状态，为true界面展示loading
          repoName:'',//仓库名
          repoUrl:'',//仓库地址
          error:error.message//错误信息(不一定有值)
        })
      })
  }
}

