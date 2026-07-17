import { Router } from "express";
import * as indexController from "../controllers/controller.js"

const IndexRouter = Router();

IndexRouter.get('/', indexController.getHomepage);

export default IndexRouter