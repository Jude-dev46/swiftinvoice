import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./uislice";

const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});

export default store;
