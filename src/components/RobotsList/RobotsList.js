import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Robot } from "../Robot/Robot";

const StyledRobotList = styled.div`
  margin-top: 20px;
  .card-img-top {
    padding-top: 5px;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }
  .card {
    align-items: center;
  }
  .robots {
    &-container {
      display: flex;
      justify-content: center;
      margin-top: 5px;
      &__robot {
        color: white;
        background-color: #515859;
        box-shadow: 5px 5px 4px -5px #000000;
        border-radius: 10px;
        .card-title {
          font-size: 30px;
        }
      }
      &__button {
        margin: 5px;
        border: none;
        &--delete {
          background-color: red;
        }
      }
    }
  }
`;

export const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <StyledRobotList>
      <Row xs={1} md={2} lg={4}>
        {robots.map((robot) => (
          <Robot key={robot._id} robot={robot}></Robot>
        ))}
      </Row>
    </StyledRobotList>
  );
};
