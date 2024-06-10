import { useState, useEffect } from 'react';

export const ItemList = ({ items }) => (
  <ul className="list-unstyled">
    {items.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

//This involves creating an HOC to handle loading logic and using it to
// enhance the components that need to display loading when listing.
export const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent({ isLoading, ...otherProps }) {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return <WrappedComponent {...otherProps} />;
  };
};

//Use withLoading HOC in Different Components like the HOC component
const ItemListWithLoading = withLoading(ItemList);

const HOC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch
    setTimeout(() => {
      setItems([
        { id: 1, name: 'Angelo Krowford' },
        { id: 2, name: 'Dialo Peter' }
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mt-4">
      <ItemListWithLoading isLoading={isLoading} items={items} />
    </div>
  );
};

export default HOC;
