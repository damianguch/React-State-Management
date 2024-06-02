import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const meals = useSelector((state) => state.meals);

  return (
    <div className="App">
      <h2>Total Meals: {meals.length}</h2>
    </div>
  );
}

export default Counter;
