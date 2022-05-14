import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { RobotsList } from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

const MainContainer = styled.div`
  border: solid 2px red;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <MainContainer>
      <Container fluid className="vh-100">
        <Row>
          <RobotsList></RobotsList>
        </Row>
      </Container>
    </MainContainer>
  );
}

export default App;
