import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { schemeApi } from '@services/scheme.api';

const rootReducer = combineReducers({
  [schemeApi.reducerPath]: schemeApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(schemeApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState['dispatch'];
