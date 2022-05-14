import fakeRobotsToTest from "../../utilities/fakeRobotsToTest";
import robotsReducer from "./robotsSlice";

describe("Given a robotsReducer reducer", () => {
  describe("When it receives a list of robots and an unknown action", () => {
    test("Then it should return the same list of robots", () => {
      const action = {
        type: "list/doWhatever",
      };
      const robotsList = fakeRobotsToTest;

      const receivedResult = robotsReducer(fakeRobotsToTest, action);

      expect(receivedResult).toEqual(robotsList);
    });
  });
});
