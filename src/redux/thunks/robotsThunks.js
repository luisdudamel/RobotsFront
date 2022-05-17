import axios from "axios";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../features/robotsSlice";

const localToken = `Bearer ${localStorage.getItem("token")}`;

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      `${process.env.REACT_APP_API_URL}robots/`,
      {
        headers: {
          Authorization: localToken,
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
    const { status } = await axios.delete(`
      ${process.env.REACT_APP_API_URL}delete/${id}`);

    if (status === 200) {
      dispatch(deleteRobotActionCreator(id));
    }
  } catch {}
};
