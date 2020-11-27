import React from 'react';

function Food({name,picture}){
  return (
    <div>
      <h2>I Like {name}</h2>
      <img src={picture}></img>
    </div>
  );
}

const foodILike = [
  {
    name:"kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    name:"samgyupsal",
    image:"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg"
  },
  {
    name:"bibipbap",
    image:"https://files.bonif.co.kr/upload/cmdt/BF102_pic_LjMg3BTB.jpg"
  }];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image}></Food>
}

function App() {
  return (
    <div className="App">
    {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
