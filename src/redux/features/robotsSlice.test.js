import fakeRobotsToTest from "../../utilities/fakeRobotsToTest";
import robotsReducer, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given a robotsReducer", () => {
  describe("When it receives a list of robots and an load action", () => {
    test("Then it should return the same list of robots", () => {
      const robotsList = fakeRobotsToTest;

      const robotLoadAction = loadRobotsActionCreator(robotsList);
      const receivedResult = robotsReducer(fakeRobotsToTest, robotLoadAction);

      expect(receivedResult).toEqual(robotsList);
    });
  });
});
