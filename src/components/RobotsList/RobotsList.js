import { useSelector } from "react-redux";

export const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <ul>
      {robots.map((robot) => (
        <li>
          {robot.name}
          {robot.speed}
        </li>
      ))}
    </ul>
  );
};
