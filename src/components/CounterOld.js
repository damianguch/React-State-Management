import React from 'react';

function Counter({ meals }) {
  return (
    <div className="mt-3 mx-5">
      <h3>Number of Meals: {meals.length}</h3>
    </div>
  );
}

export default Counter;
