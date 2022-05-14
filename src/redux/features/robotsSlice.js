const { createSlice } = require("@reduxjs/toolkit");

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
  },
});

export default robotsSlice.reducer;
