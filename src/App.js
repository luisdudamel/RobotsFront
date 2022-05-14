import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const MainContainer = styled.div`
  border: solid 2px red;
`;

function App() {
  return (
    <MainContainer>
      <Container fluid className="vh-100">
        <Row></Row>
      </Container>
    </MainContainer>
  );
}

export default App;
