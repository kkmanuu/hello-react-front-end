import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from '../redux/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, loading } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greeting;
