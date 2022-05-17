import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import LoginForm from "./components/LoginForm/LoginForm";
import { RobotsList } from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <Container fluid className="vh-95">
      <LoginForm></LoginForm>
      <RobotsList></RobotsList>
    </Container>
  );
}

export default App;
