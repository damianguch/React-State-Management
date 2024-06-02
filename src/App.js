/**
 * REACT STATE MANAGEMENT
 * 1. Using Redux(Redux Tool Kit)
 */

import React, { Fragment } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MealsList from './components/MealsList';
import Counter from './components/Counter';
import Calculator from './components/Calculator';
import FeedbackForm from './components/FeedbackForm';
import GoalApp from './components/GoalApp';
import Employees from './components/Employees';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <div className="mb-5">
          <MealsList />
          <Counter />
        </div>
      </Provider>
      <Calculator />
      <FeedbackForm />
      <GoalApp />
      <Employees />
    </Fragment>
  );
}

export default App;
