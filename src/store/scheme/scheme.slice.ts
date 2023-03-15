import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IScheme } from '@models/scheme.model';

interface SchemeState {
  config: IScheme | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: SchemeState = {
  config: undefined,
  isLoading: false,
  error: '',
};

export const schemeSlice = createSlice({
  name: 'scheme',
  initialState,
  reducers: {},
});

export default schemeSlice.reducer;
