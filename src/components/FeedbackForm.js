import { useState } from 'react';

function FeedbackForm() {
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert('Please provide a comment why the exprience was poor');
      return;
    }
    console.log('Form Submitted');
    setComment('');
    setScore(0);
  };

  return (
    <div className="App d-flex justify-content-center mb-5">
      <div className="border border-3 border-dark w-50 mb-5 mt-2 py-4">
        <form
          onSubmit={handleSubmit}
          className="d-flex justify-content-center mt-4">
          <fieldset className="mb-4 ">
            <h1 className="mb-3">Feeback Form</h1>
            <div className="row">
              <label className="mb-4 form-label h5" htmlFor="score">
                Score: {score}
              </label>
              <input
                className="mb-3 mx-2 col-12"
                type="range"
                min="0"
                max="10"
                name="score"
                id="score"
                value={score}
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <div className="row">
              <label className="form-label h5 mb-4 col-12">Comment:</label>
              <textarea
                className="mx-2 mb-4 border border-2 outline-none col-12"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <button className="btn btn-dark mx-2 w-100" type="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
