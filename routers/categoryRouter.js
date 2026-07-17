import { Router } from "express";
import * as controller from '../controllers/controller.js'

const categoryRoute = Router();

categoryRoute.get('/categories', controller.getAllCategories);

export default categoryRoute