
import './App.css';
import foods from "./foods.json";
import FoodBox from './components/FoodBox.js';
import {useState} from 'react'
import {Button, Col, Divider, Row} from "antd";




function App() {

  const [allFoods, setAllFoods] = useState(foods);
  console.log(allFoods);

  return (
   
   <div>
      <FoodBox food= {{name:foods.name, calories:foods.calories, image:foods.image, servings:foods.servings}}/>
   </div>
        );
      
}

export default App; 