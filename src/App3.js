/**
 * REACT STATE MANAGEMENT
 * 1. Using The Context API
 */
import './App.css';

import React from 'react';
import { MealsProvider } from './components/MealsContext';
import MealsList from './components/MealsList';
import Counter from './components/Counter';

function App() {
  return (
    <MealsProvider>
      <div>
        <MealsList />
        <Counter />
      </div>
    </MealsProvider>
  );
}

export default App;
