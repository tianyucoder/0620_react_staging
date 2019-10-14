import React, {Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import MyNavLink from '../component/MyNavLink'
import HomeNews from './HomeNews'
import HomeMessage from './HomeMessage'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={HomeNews}/>
            <Route path="/home/message" component={HomeMessage}/>
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}