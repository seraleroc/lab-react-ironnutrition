import 'antd/dist/antd.min.css';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';


function App() {
   //useState é como o react quer que criemos nossas variaveis
   // const[variavel, função que altera o valor da variável] = useState(valor inicial)
   // const[exemplo, setExemplo] = useState()
   //useState é a desconstrução de uma array
   const [allFoods, setAllFoods] = useState(foods);
  
   console.log(allFoods);

   return <div className= "App"></div>;
}

export default App;
