import { rest } from "msw";
import fakeRobotsToTest from "../utilities/fakeRobotsToTest";

export const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeRobotsToTest));
  }),
];
