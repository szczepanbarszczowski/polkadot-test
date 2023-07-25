import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

const middleware: any[] = [
  /* other middlewares */
];

// if (__DEV__) {
//     const createDebugger = require('redux-flipper').default;
//     middleware.push(createDebugger());
// }

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);

export default store;
