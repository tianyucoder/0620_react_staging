/*
* 该js是用于定义App组件的,必须引入React
* */
import React from 'react';

/*用工厂函数的方式定义了一个简单的组件*/
/*function App() {
  return (
    <h2>hello，0620，今天第一次接触react脚手架</h2>
  );
}*/

/*类的形式定义App组件*/
class App extends React.Component{
  render(){
    return (
      <div>
        <h2>hello，0620，今天第一次接触react脚手架</h2>
      </div>
    )
  }
}


export default App;
