// React embraces the spread operator at its core when it comes
// to props. The spread operator can be used to forward all the props in a
// component without typing them manually.

// How React Uses the Spread Operator
function OrderList() {
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
