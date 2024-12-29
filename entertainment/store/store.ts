import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { clickCount: 0 };

const clickSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
    increment: (state) => {
      state.clickCount += 1;
    },
  },
});

export const { increment } = clickSlice.actions;

export const store = configureStore({
  reducer: {
    click: clickSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;