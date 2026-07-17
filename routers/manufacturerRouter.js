import { Router } from "express";
import * as Controller from "../controllers/controller.js"

const manufacturerRouter = Router();

manufacturerRouter.get("/manufacturers", Controller.getManufacturers);

export default manufacturerRouter