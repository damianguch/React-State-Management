import { useContext, useState } from 'react';
import { MealsContext } from './MealsContext';

function MealsList() {
  const [mealName, setMealName] = useState('');

  // Consume the Context in MealsList Component
  const { meals, addMeal } = useContext(MealsContext);

  const handleAddMeal = (e) => {
    e.preventDefault();

    if (!mealName) return;
    addMeal(mealName);
    setMealName('');
  };

  return (
    <div className="mx-3 mt-4">
      <form onSubmit={handleAddMeal}>
        <input
          className="border border-2 rounded input-height"
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Enter meal name"
        />
        <button className="mx-2 btn btn-dark">Add Meal</button>
      </form>

      <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealsList;
