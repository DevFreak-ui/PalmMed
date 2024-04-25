import { NextFunction, Request, Response, Router } from "express";
import users_routes from "./users.route";
const routes = Router();

routes.use("/users", users_routes);

export default routes;
