import axios from "axios";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      process.env.REACT_APP_API_URL,
      {
        headers: {
          usertoken: `${process.env.REACT_APP_API_TOKEN}`,
        },
      }
    );

    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch {}
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  try {
    const { data: status } = await axios.delete(`
      ${process.env.REACT_APP_API_URL}delete/${id}`);

    if (status === 200) {
      dispatch(deleteRobotActionCreator(id));
    }
  } catch {}
};
