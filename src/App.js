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
    id:1,
    name:"kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2014/06/whole-cabbage-kimchi.jpg"
  },
  {
    id:2,
    name:"samgyupsal",
    image:"https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg"
  },
  {
    id:3,
    name:"bibipbap",
    image:"https://files.bonif.co.kr/upload/cmdt/BF102_pic_LjMg3BTB.jpg"
  }];


function App() {
  return (
    <div className="App">
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image}></Food>))}
    </div>
  );
}

export default App;
