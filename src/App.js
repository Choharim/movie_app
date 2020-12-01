import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
      <section class="container">
        {isLoading ? (
        <div class="loader"><span class="loader_text">Loading...</span></div>
         ) : (
           <div class="movies">
           {movies.map(movie => (
          <Movie
           key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} 
          />))} 
           </div>
            ) 
         }
      </section>
    );
  }
}//class component는 render함수를 자동적으로 실행시킴, class component사용하는 이유는 state사용하려고


export default App;
