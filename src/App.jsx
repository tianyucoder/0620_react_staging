import React,{Component} from 'react'
import About from './pages/About'
import Home from './pages/Home'
import {Link,Route,Switch,NavLink,Redirect} from 'react-router-dom'

export default class App extends Component{
  render(){
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">

              {/*原生的写法如下：借助a标签实现【页面】的切换，弊端：页面会刷新，写了过多的冗余代码*/}
              {/*<a className="list-group-item" href="./about.html">About</a>
              <a className="list-group-item active" href="./home.html">Home</a>*/}

              {/*React的写法如下：点击路由导航，实现组件的切换--------定义路由导航*/}
              <NavLink className="list-group-item" activeClassName="active" to="/about">About</NavLink>
              <NavLink className="list-group-item" activeClassName="active" to="/home">Home</NavLink>

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">

                {/*原生的写法是：来到不同的页面去展示不同的内容------定义路由所对应的组件*/}
                <Switch>
                  <Route path="/about" component={About}/>
                  <Route path="/home" component={Home}/>
                  <Redirect to="/about"/>
                </Switch>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

