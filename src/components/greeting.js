import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { message, loading, error } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreetings())
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default Greeting;
