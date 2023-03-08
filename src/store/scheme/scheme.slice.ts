import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IScheme } from '@models/scheme.model';
import { getConfig } from '@store/scheme/scheme.actions-creators';

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
  extraReducers: {
    [getConfig.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getConfig.fulfilled.type]: (state, action: PayloadAction<IScheme>) => {
      state.isLoading = false;
      state.config = action.payload;
    },
    [getConfig.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default schemeSlice.reducer;
