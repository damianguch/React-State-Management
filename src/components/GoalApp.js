import { useState } from 'react';

/**
 * The GoalForm Component submitHandler function takes the "onAdd" fxn from
 * the GoalApp componnent. It supplies the parameters to the onAdd fxn.
 */
function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: '', by: '' });

  function changeHandler(e) {
    const value = e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: '', by: '' });
  }

  return (
    <div className="container w-50">
      <h1 className="App">My Little Lemon Goals</h1>
      <form onSubmit={submitHandler} className="row">
        <label className="form-label fs-5 px-0">Goal</label>
        <input
          className="form-control"
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={changeHandler}
        />
        <label className="form-label fs-5 mt-3 px-0">Timeline: </label>
        <input
          className="h5 form-control"
          type="text"
          name="by"
          placeholder="By..."
          value={formData.by}
          onChange={changeHandler}
        />
        <button className="btn btn-dark mt-4 mb-4" type="submit">
          Submit Goal
        </button>
      </form>
    </div>
  );
}

/**
 * The ListOfGoals components takes the goals list array(allGoals) from the
 * GoalApp componet and display them.
 */
function ListOfGoals(props) {
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-unstyled">
        {props.allGoals.map((goal) => (
          <li key={goal.goal}>
            <span className="h5">
              My goal is {goal.goal}, by {goal.by}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Supplies the allGoals array and onAdd fxn as props to ListOfGoals and
 * GoalsForm components.
 */
export default function GoalApp() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoals(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <div>
      <GoalForm onAdd={addGoals} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}
