import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { schemeApi } from '@services/scheme.api';
import { IScheme } from '@models/scheme.model';
import { getConfigAction } from '@store/scheme/scheme.actions-creators';

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
  // extraReducers: {
  //   [getConfigAction.pending.type]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getConfigAction.fulfilled.type]: (state, action: PayloadAction<IScheme>) => {
  //     state.isLoading = false;
  //     state.config = action.payload;
  //   },
  //   [getConfigAction.rejected.type]: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export default schemeSlice.reducer;
