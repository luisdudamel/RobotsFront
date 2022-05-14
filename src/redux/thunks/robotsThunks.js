import axios from "axios";
import { loadRobotsActionCreator } from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get(process.env.REACT_APP_API_URL);

    dispatch(loadRobotsActionCreator(robots));
  } catch (error) {}
};
