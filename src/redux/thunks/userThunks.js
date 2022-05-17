import axios from "axios";

export const loginThunk = (formData) => async (dispatch) => {
  const { data: token } = await axios.post(
    `${process.env.REACT_APP_API_URL}robots/login/`,
    formData
  );

  localStorage.setItem("token", token);
};
