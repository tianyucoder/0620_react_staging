import React,{Component} from 'react'

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
    //使用fetch发Ajax请求
    fetch('https://api.github.com/search/repositories?q=r&sort=stars')
      .then(function(response) {
        //console.log(response.json())
        return response.json()
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(e) {
        console.log("Oops, error");
      });


  }
}

