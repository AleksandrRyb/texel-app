import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IScheme } from '@models/scheme.model';

export const getConfigAction = createAsyncThunk('scheme/getScheme', async (_, thunkApi) => {
  try {
    const response = await axios.get<IScheme>('http://localhost:4000/config');
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue('some error');
  }
});
