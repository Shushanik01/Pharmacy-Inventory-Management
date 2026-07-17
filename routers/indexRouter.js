import { Router } from "express";
import * as indexController from "../controllers/indexController.js"

const router = Router();

router.get('/', indexController.getHomepage);

export default router