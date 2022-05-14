import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loadRobotsThunk } from "./redux/thunks/robotsThunks";

const MainContainer = styled.div`
  border: solid 2px red;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  const robots = useSelector((state) => state.robots);

  return (
    <MainContainer>
      <Container fluid className="vh-100">
        <Row>{robots[0].name}</Row>
      </Container>
    </MainContainer>
  );
}

export default App;
