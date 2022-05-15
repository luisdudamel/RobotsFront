import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { Robot } from "./Robot";

describe("Given a Robot component", () => {
  describe("When its invoked, passing a robot object with the name property 'C3P0'", () => {
    test("Then it should render a container with the text 'C3P0' inside", () => {
      const robotToRender = {
        _id: "627f603ca337f27e28f92bf0",
        name: "C3P0",
        image:
          "https://media.vandalsports.com/i/1600x1600/1-2022/202211810437_1.jpg",
        speed: "200",
        stamina: "1000",
        creationDate: "26/10/1984",
      };

      render(
        <Provider store={store}>
          <Robot robot={robotToRender}></Robot>
        </Provider>
      );

      const robotText = screen.getByText(/C3P0/i);

      expect(robotText).toBeInTheDocument();
    });
  });
});
