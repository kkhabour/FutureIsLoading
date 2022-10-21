import {createSlice} from '@reduxjs/toolkit';
import storage from '../../utils/storage';

export interface AuthState {
  access_token: string | null;
  refresh_token: string | null;
  isAuth: boolean;
  isLoading: boolean;
  isRedirect: boolean;
}

const initialState: AuthState = {
  access_token: null,
  refresh_token: null,
  isLoading: true,
  isAuth: false,
  isRedirect: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload.loading;
    },
    setRedirection: (state, action) => {
      state.isRedirect = action.payload;
    },

    setCredentials: (state, action) => {
      state.isAuth = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    },
    unsetCredentials: state => {
      // remove credentials from local storage
      storage.remove({key: 'credentials'});
      state.isAuth = false;
      state.access_token = null;
      state.refresh_token = null;
    },
  },
});

export const {loading, setCredentials, unsetCredentials, setRedirection} =
  authSlice.actions;
export default authSlice.reducer;
