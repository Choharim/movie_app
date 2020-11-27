import React from 'react';
import PropTypes from 'prop-types';


const foodILike = [
  {
    id:1,
    name:"kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg",
    //rating:5
  },
  {
    id:2,
    name:"samgyupsal",
    image:"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg",
    rating:4.9
  },
  {
    id:3,
    name:"bibipbap",
    image:"https://files.bonif.co.kr/upload/cmdt/BF102_pic_LjMg3BTB.jpg",
    rating:4.8
  }];

function Food({name,picture,rating}){
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture:PropTypes.string.isRequired,
  rating:PropTypes.number //isRequired이 없으니까 rating은 필수가 아님
}

function App() {
  return (
    <div className="App">
    {foodILike.map(dish => 
      (<Food key={dish.id} 
      name={dish.name} 
      picture={dish.image} 
      rating={dish.rating}
      ></Food>))}
    </div>
  );
}

export default App;
