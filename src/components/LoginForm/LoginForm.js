import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loadRobotsThunk } from "../../redux/thunks/robotsThunks";
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
  const submitLogin = async (event) => {
    event.preventDefault();
    await dispatch(loginThunk(formData));
    await dispatch(loadRobotsThunk());
    setFormData(emptyFields);
  };

  return (
    <>
      <Form className="d-flex" autoComplete="off">
        <Row className="align-items-center">
          <Form.Group className="mb-3">
            <Form.Label htmlFor="username">Username</Form.Label>

            <Col xs={7}>
              <Form.Control
                id="username"
                value={formData.username}
                onChange={modifyData}
                placeholder="Enter Username"
              />
            </Col>

            <Form.Text className="text-muted">
              To delete a robot, you need to be logged in.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Password</Form.Label>
            <Col xs={7}>
              <Form.Control
                autoComplete="on"
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={modifyData}
              />
            </Col>
          </Form.Group>
        </Row>
        <Button
          disabled={buttonDisabled}
          variant="primary"
          type="submit"
          onClick={submitLogin}
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
