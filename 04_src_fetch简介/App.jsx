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
    fetch('https://api.github.com/search/repositories3?q=r&sort=stars')
      .then(function(response) {
        //console.log(response.json())
        /*
        * 1.new了一个Promise实例
        * 2.根据返回的数据，修改Promise实例的状态(可能成功，也可能失败)
        * 3.修改状态的时候，若成功，则携带成功数据，若失败，则携带失败数据
        * */
        if(response.ok){
          return response.json()
        }else{
          return Promise.reject('请求失败')
        }
      })
      .then((data)=> {
        console.log('成功')
        this.setState({
          isLoading:false, //标识是否为loading状态，为true界面展示loading
          repoName:data.items[0].name,//仓库名
          repoUrl:data.items[0].html_url,//仓库地址
          error:''//错误信息(不一定有值)
        })
        console.log(data);
      })
      .catch((error)=> {
        this.setState({
          isLoading:false, //标识是否为loading状态，为true界面展示loading
          repoName:'',//仓库名
          repoUrl:'',//仓库地址
          error:error.toString()//错误信息(不一定有值)
        })
        console.log('失败')
        console.log("Oops, error");
      });


  }
}

