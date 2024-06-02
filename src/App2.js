/**
 * SHARED STATE MANAGEMENT
 * 1. Lift the state up to the App component
 * 2. Pass the state and the state-updating functions as props
 */

import React from 'react';
import './App.css';
import MealsList from './components/MealsList';
import Counter from './components/Counter';

function App() {
  const todaysMeals = ['Baked Beans', 'Fried Rice', 'Pounded Yam'];
  // State is lifted to the App component
  // Application state is stored in the parent(App Component)
  const [meals, setMeals] = React.useState(todaysMeals);

  // Function to update meal state
  const addMeal = (meal) => {
    if (meal) {
      setMeals((prevMeals) => [...prevMeals, meal]);
    }
  };

  return (
    <div className="">
      <MealsList meals={meals} addMeal={addMeal} />
      <Counter meals={meals} />
    </div>
  );
}

export default App;
