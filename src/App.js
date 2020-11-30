import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    movies:[],
    isLoading:true
  };

  getMovies = async() => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading:false}); // {movies:movies, isloading:false}
  };

  componentDidMount(){
   this.getMovies();
  }

  render(){
    const {isLoading} = this.state;  //this.state는 state object를 가져온 것
    return (
      <div>
        {isLoading ? "loading..." : "we are ready"}
      </div>
    );
  }
}//class component는 render함수를 자동적으로 실행시킴, class component사용하는 이유는 state사용하려고


export default App;
