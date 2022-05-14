import fakeRobotsToTest from "../../utilities/fakeRobotsToTest";
import { loadRobotsActionCreator } from "../features/robotsSlice";
import { loadRobotsThunk } from "./robotsThunks";

describe("Given a loadRobotsThunk", () => {
  describe("When its invoked", () => {
    test("Then it should call the dispatch passing a load action", async () => {
      const loadThunk = loadRobotsThunk();
      const dispatch = jest.fn();
      const mockRobots = fakeRobotsToTest;

      const expectedAction = loadRobotsActionCreator(mockRobots);

      await loadThunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
