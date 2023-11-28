import { createSlice } from "@reduxjs/toolkit";

const initialUiState = {
  notification: null,
  isAuthenticated: false,
  isLoading: false,
  isOpen: false,
  isModalOpen: false,
  isError: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setIsAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    setIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
