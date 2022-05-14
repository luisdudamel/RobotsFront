import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const MainContainer = styled.div`
  border: solid 2px red;
`;

function App() {
  return (
    <MainContainer>
      <Container fluid className="vh-100">
        <Row>
          <Col>EN CONSTRUCCION CAPO</Col>
          <Col>EN CONSTRUCCION CAPO</Col>
        </Row>
      </Container>
    </MainContainer>
  );
}

export default App;
