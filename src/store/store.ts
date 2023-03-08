import { combineReducers, configureStore } from '@reduxjs/toolkit';
import schemeReducer from '@store/scheme/scheme.slice';

const rootReducer = combineReducers({
  schemeReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
