import { useMealsContext } from './MealsContext';

function Counter() {
  const { meals } = useMealsContext();

  return (
    <div>
      <h2>Total Meals: {meals.length}</h2>
    </div>
  );
}

export default Counter;
