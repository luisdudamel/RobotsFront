import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { RobotsList } from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <Container fluid className="vh-100">
      <RobotsList></RobotsList>
    </Container>
  );
}

export default App;
