import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { triggerTest } from '../features/test';

export default function TestComponent() {
  const dispatch = useDispatch();
  const test_state = useSelector((state) => state);

  const testHandler = (event) => {
    event.preventDefault();
    dispatch(triggerTest('PASSED'));
  };

  return (
    <form onSubmit={testHandler}>
      <button>Trigger Action</button>
      <div>{test_state.test.value}</div>
    </form>
  );
}
