import { configureStore } from "@reduxjs/toolkit";
import robotsSliceReducer from "../features/robotsSlice";

const store = configureStore({
  reducer: {
    robots: robotsSliceReducer,
  },
});

export default store;
