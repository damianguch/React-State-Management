/**
 * store.js sets up the Redux store and defines how the
 * application's state changes in response to actions.
 * The store holds the complete state tree of the application.
 */
// import { createStore } from 'redux';
import {
  configureStore,
  /*createReducer*/ createSlice
} from '@reduxjs/toolkit';

// const initialState = {
//   meals: []
// };

// The reducer specifies how the state changes in response to different
//actions. It ensures that state updates are handled immutably.
// const mealsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_MEAL':
//       return {
//         ...state,
//         meals: [...state.meals, action.payload]
//       };
//     default:
//       return state;
//   }
// };

//createReducer(): Using this lets you supply a lookup table of action types
// to case reducer functions, rather than writing switch statements

// const mealsReducer = createReducer(initialState, {
//   ADD_MEAL: (state, action) => {
//     state.meals.push(action.payload);
//   }
// });

/**createSlice(): accepts an object of reducer functions, a slice name, and an
 * initial state value, and automatically generates a slice reducer with
 * corresponding action creators and action types
 * The createSlice utility combines the definition of the initial state, the
 * reducers, and the action creators all in one step.
 */
const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    isLoading: false,
    error: null
  },
  reducers: {
    addMeal: {
      reducer: (state, action) => {
        state.meals.push(action.payload);
      },
      prepare: (mealName, calories) => ({
        payload: { mealName, calories }
      })
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

/**
 * The store holds the complete state tree of the application and provides
 * methods to dispatch actions and subscribe to state changes.
 */

//const store = createStore(mealsReducer);

// Redux store's state will have a meals key corresponding to the state
// managed by mealsSlice.reducer for the structure below

/*reducer: {
  meals: mealsSlice.reducer
}*/

const store = configureStore({
  reducer: mealsSlice.reducer
  //mealsReducer
});

export default store;
export const { addMeal, setError, setLoading } = mealsSlice.actions;
