import { PropTypes, string } from "prop-types";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../redux/thunks/robotsThunks";

export const Robot = ({
  robot: { name, image, speed, stamina, creationDate, _id },
}) => {
  const dispatch = useDispatch();
  const deleteAction = () => {
    dispatch(deleteRobotThunk(_id));
  };

  return (
    <Col className="robots-container">
      <Card className="robots-container__robot" style={{ width: "15rem" }}>
        <Card.Img variant="top" src={image} alt={`${name} looking at you`} />
        <Card.Body className="robots-container__card">
          <Card.Title className="robots-container__card">{name}</Card.Title>
          <Card.Text className="robots-container__text">
            Speed: {speed}
          </Card.Text>
          <Card.Text className="robots-container__text">
            Stamina: {stamina}
          </Card.Text>
          <Card.Text className="robots-container__text">
            Born: {creationDate}
          </Card.Text>
          <Button
            onClick={deleteAction}
            className="robots-container__button--delete"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Robot.propTypes = {
  robot: PropTypes.shape({
    name: string.isRequired,
    speed: string.isRequired,
    image: string.isRequired,
    stamina: string.isRequired,
    creationDate: string.isRequired,
  }).isRequired,
};
