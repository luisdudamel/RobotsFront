import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/thunks/userThunks";

const LoginForm = () => {
  const emptyFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(emptyFields);
  const [buttonDisabled, setButtonDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const modifyData = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };
  const submitLogin = (event) => {
    event.preventDefault();

    dispatch(loginThunk(formData));
  };

  return (
    <form autoComplete="off" noValidate>
      <label htmlFor="username"></label>
      <input
        id="username"
        value={formData.username}
        onChange={modifyData}
      ></input>
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        autoComplete="on"
        value={formData.password}
        onChange={modifyData}
      ></input>
      <button disabled={buttonDisabled} type="submit" onClick={submitLogin}>
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
