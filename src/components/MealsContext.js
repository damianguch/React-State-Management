import { createContext, useContext, useState } from 'react';

// Create and export the context
export const MealsContext = createContext();

// Create a provider component
export const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals((prevMeals) => [...prevMeals, meal]);
  };

  return (
    <MealsContext.Provider value={{ meals, addMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export const useMealsContext = () => useContext(MealsContext);
