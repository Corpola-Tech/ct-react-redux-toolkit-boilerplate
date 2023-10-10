import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/test';

export default configureStore({
  reducer: {
    test: testReducer,
  },
});
