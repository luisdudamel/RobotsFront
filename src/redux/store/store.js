import { configureStore } from "@reduxjs/toolkit";
import robotsSliceReducer from "../features/robotsSlice";
import usersSliceReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    robots: robotsSliceReducer,
    users: usersSliceReducer,
  },
});

export default store;
