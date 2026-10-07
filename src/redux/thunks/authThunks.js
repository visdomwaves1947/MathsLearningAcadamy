import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from '../../services/api';

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ signInInput, signInPassword }, { rejectWithValue }) => {
    try {
      const data = await loginUserApi({ signInInput, signInPassword });
      const userObj = { ...data.user, token: data.token };
      localStorage.setItem('mla_user', JSON.stringify(userObj));
      return userObj;
    } catch (error) {
      return rejectWithValue(error.message || 'Server error, please try again');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(userData);
      const userObj = { ...data.user, token: data.token };
      localStorage.setItem('mla_user', JSON.stringify(userObj));
      return userObj;
    } catch (error) {
      return rejectWithValue(error.message || 'Server error, please try again');
    }
  }
);
