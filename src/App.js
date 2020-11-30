import React from "react";
import axios from "axios";
import Movie from "./Movie";

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
    const {isLoading, movies} = this.state;  //this.state는 state object를 가져온 것
    return (
      <div>
        {isLoading ? "loading..." : movies.map(movie => {
          return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} />
        })}
      </div>
    );
  }
}//class component는 render함수를 자동적으로 실행시킴, class component사용하는 이유는 state사용하려고


export default App;
