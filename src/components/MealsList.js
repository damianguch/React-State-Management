import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import the addMeal action creator from the slice
import { addMeal, setError, setLoading } from '../store';

function MealsList() {
  // Extract state from the reducer
  const meals = useSelector((state) => state.meals);
  const isLoading = useSelector((state) => state.isLoading);

  const dispatch = useDispatch();
  const [mealName, setMealName] = useState('');
  const [calories, setCalories] = useState('');

  const handleAddMeal = (e) => {
    e.preventDefault();

    if (!mealName || !calories) {
      dispatch(setError('No Data Sent!'));
      return;
    }

    // Dispatch state and action to the reducer
    // const action = {
    //   type: 'ADD_MEAL',
    //   payload: mealName
    // };

    // Dispatch the action creator
    // When dispatch(addMeal(mealName,calories)) is called, the addMeal action
    // creator generates an action object like this:
    //
    /**{
        type: 'meals/addMeal',
        payload: mealName
       }*/

    dispatch(addMeal(mealName, calories));
    if (!isLoading) {
      dispatch(setLoading(true));
    }
    setMealName('');
    setCalories('');
  };

  /**
   * If the key does not change, React will keep the internal state of the node
   * This happens in cases when the array changes (items are added, removed,
   * or reordered),
   */
  const tableItems = meals.map((meal, index) => {
    return (
      <tr key={index}>
        <td>{meal.mealName}</td>
        <td>{meal.calories}</td>
      </tr>
    );
  });

  return (
    <div className="App mt-4 mx-3">
      <h1>Meal Calorie Checker App</h1>
      <form onSubmit={handleAddMeal} className="">
        <input
          className="input-height h5"
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Enter meal name"
        />
        <br />
        <input
          className="input-height h5 mx-2"
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Enter calories"
        />
        <br />
        <button className="btn btn-dark mx-2" type="submit">
          Add Meal
        </button>
      </form>

      {/* <ul>
        {meals.map((meal, index) => (
          <li key={index}>{meal}</li>
        ))}
      </ul> */}

      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th>Meal Name</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {/* {meals.map((meal, index) => (
            <tr key={index}>
              <td>{meal.mealName}</td>
              <td>{meal.calories}</td>
            </tr>
          ))} */}
          {tableItems}
        </tbody>
      </table>
    </div>
  );
}

export default MealsList;
