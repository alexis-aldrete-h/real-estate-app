import Express from "express";
import * as core from "express-serve-static-core";

export const server: core.Express = Express();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routeHandler = (req: Express.Request, res: Express.Response): Express.Response<any, Record<string, any>> => (
    res.send("Hello world!")
);

server.get("/", routeHandler);
