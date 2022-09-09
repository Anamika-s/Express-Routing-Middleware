import express from "express"
import { myLogger } from "../middlewares/test-middleware.js";
const routes = express.Router();

import { testController } from "../controllers/testController.js";

routes.use(myLogger)
routes.get("/test", testController)

export {routes}