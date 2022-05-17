const { createSlice } = require("@reduxjs/toolkit");

const usersSlice = createSlice({
  name: "users",
  initialState: "",
  reducers: {
    loginUser: (robots, action) => {},
  },
});

export const { loginUser: loginUserActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
