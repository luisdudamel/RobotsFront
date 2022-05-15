import { Button, Card, Col } from "react-bootstrap";

export const Robot = (robot) => {
  return (
    <Col className="robots-container">
      <Card className="robots-container__robot" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={robot.robot.image} />
        <Card.Body>
          <Card.Title>{robot.robot.name}</Card.Title>
          <Card.Text>Speed: {robot.robot.speed}</Card.Text>
          <Card.Text>Stamina: {robot.robot.stamina}</Card.Text>
          <Card.Text>Born: {robot.robot.creationDate}</Card.Text>
          <Button className="robots-container__button">Edit</Button>
          <Button className="robots-container__button--delete">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
