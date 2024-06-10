// React embraces the spread operator at its core when it comes
// to props. The spread operator can be used to forward all the props in a
// component without typing them manually.

function Order() {}

// How React Uses the Spread Operator
export function OrderList() {
  const order = {
    id: '1',
    username: 'John Doe',
    item: 'Pizza Margerita',
    price: '$30'
  };
  return (
    // Passing all the props in the return statement explicitly
    // <Order id="1" username="John Doe" item="Pizza Margerita" price="$30" />

    // Using the  spread operator
    <Order {...order} />
  );
}

const Button = ({ type, children, ...buttonProps }) => {
  const className = type === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
  return (
    <button
      className={`Button ${className} btn btn-info mx-2`}
      {...buttonProps}>
      {children}
    </button>
  );
};

// The type prop is a custom prop that determines the background of the button
//based on the theme provided. ...buttonProps groups all the props that belong
// to the native button

/**
 * The ...buttonProps syntax is the rest parameter. It collects the remaining
 * properties into a new object called buttonProps.
 */

/**
 * buttonProps is not explicitly defined but is implicitly created
 * through the use of destructuring and the rest operator, which collects
 * any additional properties passed to the component.
 *
 * buttonProps is automatically created from the remaining props not explicitly
 * destructured.
 */
const LoginButton = ({ type, children, ...buttonProps }) => {
  return (
    <Button
      type="secondary"
      {...buttonProps}
      onClick={() => alert('Logging in!')}>
      {children}
    </Button>
  );
};

function SpreadOperator() {
  return (
    <div className="App mt-5">
      <header className="Header h3">Little Lemon Restaurant</header>
      <Button type="primary" onClick={() => alert('Signing up')}>
        Sign Up
      </Button>
      <LoginButton type="secondary" onClick={() => alert('Signing up')}>
        Login
      </LoginButton>
    </div>
  );
}

export default SpreadOperator;
