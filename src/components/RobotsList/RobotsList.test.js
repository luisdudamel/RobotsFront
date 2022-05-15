import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { RobotsList } from "./RobotsList";

const mockUseDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => {
    return [
      {
        _id: "627f603ca337f29e28f92bf0",
        name: "Bender",
        image:
          "https://media.vandalsports.com/i/1600x1600/1-2022/202211810437_1.jpg",
        speed: "200",
        stamina: "1000",
        creationDate: "26/10/1984",
      },
      {
        _id: "627f603ca337f27e28f92bf0",
        name: "Alfa",
        image:
          "https://media.vandalsports.com/i/1600x1600/1-2022/202211810437_1.jpg",
        speed: "200",
        stamina: "1000",
        creationDate: "26/10/1984",
      },
    ];
  },
  useDispatch: () => {
    return mockUseDispatch;
  },
}));

describe("Given a RobotsList component", () => {
  describe("When its invoked with a list of 2 robots from the state", () => {
    test("Then it should render 2 Robot components with the names 'Bender' and 'Alfa' inside", () => {
      const expectedLength = 2;

      render(
        <Provider store={store}>
          <RobotsList></RobotsList>
        </Provider>
      );

      const totalOfNames = [];
      totalOfNames.push(screen.getByText("Bender"));
      totalOfNames.push(screen.getByText("Alfa"));

      expect(totalOfNames).toHaveLength(expectedLength);
    });
  });
});
