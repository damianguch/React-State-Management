/**
 * Handling Cross Cutting Concern Using the render props
 * */
import { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetcher = ({ url, render }) => {
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
  }, [url]);

  return render({ data, isLoading, error });
};

export const UserList = () => (
  <DataFetcher
    url="https://jsonplaceholder.typicode.com/users"
    render={({ data, isLoading, error }) => {
      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return (
        <div className="App mb-5">
          <h1>List Of Users</h1>
          <ul className="list-unstyled h5 mx-2">
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      );
    }}
  />
);

export const PostList = () => (
  <DataFetcher
    url="https://jsonplaceholder.typicode.com/posts?_limit=10"
    render={({ data, isLoading, error }) => {
      if (isLoading) {
        return <div>Loading...</div>;
      }

      if (error) {
        return <div>Error: {error.message}</div>;
      }

      return (
        <div className="App mb-5">
          <h1>List Of Posts</h1>
          <ul className="list-unstyled h5 mx-2">
            {data.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
      );
    }}
  />
);
