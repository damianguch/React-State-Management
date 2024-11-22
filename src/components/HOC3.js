import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * This will involve creating an HOC to handle the data fetching logic and
 * using it to enhance the components that need to fetch data. The components
 * will no longer dp the fetching function.
 *
 * Encapsulating cross cutting concerns - data fetching, state management and
 * error checking
 *
 * This component will handle the logic for fetching data, managing loading
 * and error states, and providing the fetched data to the wrapped component.
 */

export const withDataFetching = (url) => (WrappedComponent) => {
  return function WithDataFetchingComponent(props) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      let isSubscribed = true;

      axios
        .get(url)
        .then((response) => {
          if (isSubscribed) {
            setData(response.data);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          if (isSubscribed) {
            setError(err);
            setIsLoading(false);
          }
        });

      return () => {
        isSubscribed = false;
      };
      // eslint-disable-next-line
    }, [url]);

    return (
      <WrappedComponent
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      />
    );
  };
};

/**
 * Use withDataFetching HOC in Different Components
 * Use the withDataFetching HOC to enhance the components that need to fetch
 * and display data.
 */

// Fetch and Display a List of Users
const UserList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-3">
      <h2>List Of HOC Users</h2>
      <ul className="list-unstyled fs-5">
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

//Fetch and Display a List of Posts
const PostList = ({ data, isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mx-3">
      <h2>List of HOC Posts</h2>
      <ul className="list-unstyled fs-5">
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Providing PostList component with data fetching capability
export const EnhancedPostList = withDataFetching(
  'https://jsonplaceholder.typicode.com/posts?_limit=5'
)(PostList);

// When withDataFetching is called, it returns the WithDataFetchingComponent
// function, which is then immediately called with the UserList component
// (WrappedComponent) as its argument.
export const EnhancedUserList = withDataFetching(
  'https://jsonplaceholder.typicode.com/users?_limit=5'
)(UserList);
