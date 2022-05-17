import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import loginThunk from "../../redux/thunks/loginThunk";

const LoginForm = () => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [buttonDisabled, setButtonDisable] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const changeData = (event) => {
    setFormData({
      ...formData,
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
        onChange={changeData}
      ></input>
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={changeData}
      ></input>
      <button disabled={buttonDisabled} type="submit" onSubmit={submitLogin}>
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;
