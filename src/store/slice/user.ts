import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUserInfo } from '../../service/user';

export const getUserAsync = createAsyncThunk('user/getUser', async () => {
  const response = await getUserInfo();
  return response.data;
});

const initialState: {
  userInfo?: API.User;
  loading: 'idle' | 'loading' | 'faild';
} = {
  loading: 'idle',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserAsync.fulfilled, (state, action) => {
      state.loading = 'idle';
      state.userInfo = action.payload.data;
    });
  },
});

export default userSlice.reducer;
