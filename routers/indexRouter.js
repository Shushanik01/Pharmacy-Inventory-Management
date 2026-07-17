import { Router } from "express";

const router = Router();

router.get('/', categoryController.getAllCategories)