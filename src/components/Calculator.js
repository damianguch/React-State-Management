import { useRef, useState } from 'react';

/** useState hook allows you to add state to functional components.
 * useRef value persists across renders without causing re-renders.
 * useRef hook allows you to directly create a reference to a DOM element.
 * After the component mounts, inputRef.current will point to the DOM
 * element. React sets the 'current' property to the corresponding DOM element.
 */

function Calculator() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [input, setInput] = useState(null);
  const [error, setError] = useState(null);

  /**
   * When you use useRef, it returns a mutable ref object. This object has a
   * current property, which is used to store the reference to the actual DOM
   * element or value.
   */

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => {
      try {
        result = result / Number(inputRef.current.value);
        if (Number.isFinite(result)) return result;
        throw new Error('Division by Zero not allowed!');
      } catch (error) {
        setError(error.message);
        setResult(0);
        setTimeout(() => {
          setError('');
        }, 2000);
        return 0;
      }
    });
  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevValue) => prevValue * 0);
  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };

  return (
    <div className="mx-4 App mb-5">
      <div>
        <h1>Simple Working Calculator</h1>
      </div>
      <form>
        <p className="h5 text-danger ">{error}</p>
        <p className="h5" ref={resultRef}>
          {result}
        </p>
        <div className="form-outline">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="border border-2 rounded h5"
            type="number"
            placeholder="Type a number"
            ref={inputRef}
            pattern="[0-9]"
          />
        </div>
        <br /> <br />
        <button
          disabled={!input}
          className="text-white btn bg-info px-3 py-1 rounded mx-1"
          onClick={plus}>
          Add
        </button>
        <button className="btn bg-info px-3 py-1 rounded mx-1" onClick={minus}>
          Subtract
        </button>
        <button className="btn bg-info px-3 py-1 rounded mx-1" onClick={times}>
          Multiply
        </button>
        <button className="btn bg-info px-3 py-1 rounded mx-1" onClick={divide}>
          divide
        </button>
        <button className="btn px-3 py-1 rounded mx-2" onClick={resetInput}>
          Reset Input
        </button>
        <button className="btn px-3 py-1 rounded mx-2" onClick={resetResult}>
          Reset Result
        </button>
      </form>
    </div>
  );
}

export default Calculator;
