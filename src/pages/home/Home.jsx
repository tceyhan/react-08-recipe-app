
import axios from 'axios';
import React, {useState} from 'react';
import Header from '../../components/header/Header';

const APP_ID = "7164b2bc";
const APP_KEY = "c9a206eee659e5c15eb6b58c4e86d33a";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());



  
  const url = ` https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);      
    }
    else {
      console.log("please enter a food");
    }
  };

  return (
    <div>
      <Header
      setQuery ={setQuery}
      getData ={getData}
      mealTypes={mealTypes}
      setMeal={setMeal}
      />

    </div>
  )
}

export default Home