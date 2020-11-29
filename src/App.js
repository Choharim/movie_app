import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    isLoading:true
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading:false, book:true}); //기존 state와 다른 새로운 state(미래의 state)니까 다른 key가 들어가도 상관없음
    },6000);
  }
  render(){
    const {isLoading} = this.state;  //this.state는 state object를 가져온 것
    return (
      <div>
        {isLoading ? "loading..." : "we are ready"}
      </div>
    );
  }
}//class component는 render함수를 자동적으로 실행시킴


export default App;
