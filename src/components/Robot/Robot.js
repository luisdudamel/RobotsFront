import { Button, Card, Col } from "react-bootstrap";

export const Robot = ({
  robot: { name, image, speed, stamina, creationDate },
}) => {
  return (
    <Col className="robots-container">
      <Card className="robots-container__robot" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={image} alt={`${name} looking at you`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Speed: {speed}</Card.Text>
          <Card.Text>Stamina: {stamina}</Card.Text>
          <Card.Text>Born: {creationDate}</Card.Text>
          <Button className="robots-container__button">Edit</Button>
          <Button className="robots-container__button--delete">Delete</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
