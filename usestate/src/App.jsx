import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import RestaurantForm from "./components/RestaurantForm.jsx";
import "./App.css";

import { useState } from 'react';

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  const addRestaurant = newRestaurant => setRestaurants(prev => [...prev, newRestaurant]);

  return (
    <div className="App">
      <RestaurantForm addRestaurant={addRestaurant}/>
      <RestaurantsContainer restaurants={restaurantState}/>
    </div>
  );
}

export default App;
