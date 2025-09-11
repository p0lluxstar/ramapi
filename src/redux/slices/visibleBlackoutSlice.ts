import { createSlice } from '@reduxjs/toolkit';

interface IBlackoutState {
  visibleBlackout: boolean;
}

const initialState: IBlackoutState = {
  visibleBlackout: false,
};

const visibleBlackoutSlice = createSlice({
  name: 'blackout',
  initialState,
  reducers: {
    trueVisibleBlackout(state) {
      state.visibleBlackout = true;
      document.body.classList.add('scroll');
    },
    falseVisibleBlackout(state) {
      state.visibleBlackout = false;
      document.body.classList.remove('scroll');
    },
    setVisibleBlackout(state, action) {
      state.visibleBlackout = action.payload;
    },
  },
});

export const { trueVisibleBlackout, falseVisibleBlackout, setVisibleBlackout } =
  visibleBlackoutSlice.actions;
export const visibleBlackoutReducer = visibleBlackoutSlice.reducer;
