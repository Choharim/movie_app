import React from 'react';

function Food({fav}){
  return (<h1>I like {fav}</h1>);
}

function App() {
  return (
    <div className="App">
    <h1>Hellow!</h1>
    <Food fav="kimchi"/>
    <Food fav="galbi"/>
    <Food fav="ramen"/>
    </div>
  );
}

export default App;
