import { useReducer } from 'react';
import Spread from './Spread';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 10 };

  return state;
};

function Reducer() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container outline-none App mt-5 border border-2 w-50">
      <h1 className="mt-3">Wallet: {state.money}</h1>
      <div className="mt-3">
        <button
          className="btn btn-dark mx-2 fs-5"
          onClick={() => dispatch({ type: 'buy_ingredients' })}>
          Shopping For Veggies
        </button>
        <button
          className="btn btn-dark mx-2 fs-5"
          onClick={() => dispatch({ type: 'sell_a_meal' })}>
          Serve Customer A Meal
        </button>
      </div>
      <Spread />
    </div>
  );
}

export default Reducer;
