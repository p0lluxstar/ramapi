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
    toggleVisibleBlackout(state) {
      if (typeof window !== 'undefined' && window.innerWidth < 580) {
        state.visibleBlackout = !state.visibleBlackout;
        document.body.style.overflow = state.visibleBlackout
          ? 'hidden'
          : 'auto';
      }
    },
    setVisibleBlackout(state, action) {
      state.visibleBlackout = action.payload;
      document.body.style.overflow = state.visibleBlackout ? 'hidden' : 'auto';
    },
  },
});

export const { toggleVisibleBlackout, setVisibleBlackout } =
  visibleBlackoutSlice.actions;
export const visibleBlackoutReducer = visibleBlackoutSlice.reducer;
