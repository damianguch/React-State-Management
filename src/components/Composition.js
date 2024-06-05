import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Generic component. Uses the children props to specify its text.
const Button = ({ backgroundColor, children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn w-25 mt-4 fs-5 mx-2 text-white"
      style={{ backgroundColor }}>
      {children}
    </button>
  );
};

// Generic component. Renders an overlay in the background and a white modal
// in the center of the screen. The children props determine the content of
// the modal.
const Alert = ({ children, onClose }) => {
  return (
    <>
      <div className="Overlay"></div>
      <div className="Alert">
        {children}
        <Button backgroundColor="gray" onClick={onClose}>
          Close
        </Button>
      </div>
    </>
  );
};

// Create a warning button using the specialization feature of component
// composition; there, render the button component, configure its properties
// to have red color and a text "Delete"
const DeleteButton = ({ onClick }) => {
  return (
    <Button onClick={onClick} backgroundColor="red">
      Delete
    </Button>
  );
};

function Composition() {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate('/effect');
  };

  return (
    <div className="App">
      <header className="h1">Little Lemon Restaurant</header>
      {!showAlert && (
        <div className="">
          <h3 className="mt-5">Welcome to Little Lemon Restaurant!</h3>
          <p className="h5">
            Please click the button below to delete your account.
          </p>
          <DeleteButton onClick={handleDeleteClick} />
        </div>
      )}

      {showAlert && (
        <Alert onClose={handleCloseAlert}>
          <h2 className="fw-bold">Delete Account</h2>
          <p className="h5">
            Are you sure you want to delete? You will miss all your delicious
            recipes!
          </p>
          <DeleteButton onClick={handleCloseAlert} />
        </Alert>
      )}

      <LiveOrders />
    </div>
  );
}

export default Composition;

// //JSX
// export const Logout = () => {
//   <div>
//     <p>Are you sure?</p>
//     <SubmitButton color="red">Yes</SubmitButton>
//   </div>;
// };

// // Elements Tree
// const elementObject = {
//   type: 'div',
//   props: {
//     children: [
//       {
//         type: 'p',
//         props: {
//           children: 'Are you sure?'
//         }
//       },
//       {
//         type: SubmitButton,
//         props: {
//           color: 'blue',
//           children: 'Yes'
//         }
//       }
//     ]
//   }
// };

// // By using the children prop, it has become a generic component
// // to which we can provide any valid JSX as children
// function Dialog(props) {
//   return <div className="modal">{props.children}</div>;
// }

// // ConfirmDialog is a special case of Dialog
// function ConfirmDialog() {
//   return (
//     <Dialog color="blue">
//       <h1 className="dialogue-title">Thanks!</h1>
//       <p className="dialogue-message">
//         We'll Process your order in less than 24 hours.
//       </p>
//     </Dialog>
//   );
// }

//A component that encapsulates the tradional or native HTML button
const SubmitButton = () => {
  const buttonTitle = 'Submit';

  return (
    <button className="btn btn-dark">
      <span>{buttonTitle}</span>
    </button>
  );
};

export const Logout = () => {
  return (
    <div className="mt-5">
      <p>Are You Sure?</p>
      <SubmitButton color="blue">Yes</SubmitButton>
    </div>
  );
};

const buttonElement = {
  type: SubmitButton,
  props: {
    color: 'green',
    children: 'Submit!'
  }
};

React.cloneElement(buttonElement, { disabled: true });

// A row compoenent to handle the separation per item
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`
  };

  return (
    <div className="Row">
      {React.Children.map(children, (child, index) => {
        // props are immutable objects, so create a copy of the element
        // first and perform the transformation on the copy
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {})
          }
        });
      })}
    </div>
  );
};

export function LiveOrders() {
  return (
    <div className="App mt-5">
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>$20</p>
        <p>18:30</p>
        <p>John Doe</p>
      </Row>
    </div>
  );
}
