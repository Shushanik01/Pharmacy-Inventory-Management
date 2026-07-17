import { Router } from "express";
import * as controller from '../controllers/controller'

const categoryRoute = Router();

categoryRoute.get('/categories', controller.getAllCategories)