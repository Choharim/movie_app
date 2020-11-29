import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count:0
  };//component의 데이터를 바꾸기 위해 사용하는 것

  add = () => {
    this.setState({count: this.state.count +1});
  };
  minus = () => {
    this.setState({count: this.state.count -1});
  };

  render(){
  return (
  <div>
    <h1>The number is {this.state.count}</h1>
    <button onClick={this.add}>Add</button>
    <button onClick={this.minus}>Minus</button> 
  </div>
  );
  }
}//class component는 render함수를 자동적으로 실행시킴


export default App;
