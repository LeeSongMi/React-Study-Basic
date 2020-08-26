import React,{useState} from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    rating:5
  },
  {
    id:2,
    name: "Ramen",
    rating:4.8
  },
  {
    id:3,
    name: "Bibimbap",
    rating:4.6
  },
  {
    id:4,
    name: "Chicken",
    rating:4.9
  },
  {
    id:5,
    name: "Pizza",
    rating:3.7
  }
  
]

function Food(props){
  return (
    <div>
      <h1>I Love {props.name}</h1>
      <h4>{props.rating}/5.0</h4>
    </div>
    );
}

// 데이터 타입 검사
Food.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};


const renderFood = (dish) =>{
  console.log(dish);
  return <Food key={dish.id} name={dish.name} rating={dish.rating} />

}

function App() {
  return(
    <div>
      {foodILike.map(renderFood)}
    </div>


  );
}


export default App;
