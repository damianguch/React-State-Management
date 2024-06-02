import { useState } from 'react';

function MealsList({ meals, addMeal }) {
  const [mealName, SetMealName] = useState('');

  function handleChange(e) {
    SetMealName(e.target.value);
  }

  // Store Application state in the parent component
  // Child components use and manipulate the state
  const handleAddMeal = (e) => {
    e.preventDefault();

    addMeal(mealName);
    SetMealName('');
  };

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center">
        <form className="mt-4" onSubmit={handleAddMeal}>
          <label className="form-label h5">Meal Name</label>
          <input
            className="form-control w-25 border border-2 mb-3"
            type="text"
            placeholder="Enter Meal Name"
            value={mealName}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-dark mb-4">
            Add Meal
          </button>
        </form>
        <h2 className="px-0">Meals List</h2>
        {meals?.map((meal, index) => (
          <h4
            className="border border-secondary rounded border-2 px-3 py-2 w-25 mt-2 "
            key={index}>
            <b>{meal}</b>
          </h4>
        ))}
      </div>
    </div>
  );
}

export default MealsList;
