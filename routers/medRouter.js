import { Router } from "express";
import * as Controller from "../controllers/controller.js"

const medRouter = Router();

 medRouter.get("/medicines", Controller.getMedicines);

 medRouter.post("/medicines", Controller.addMedicine)

 medRouter.post("/medicines/delete", Controller.removeMedicines)

 medRouter.post("/medicines/:id/delete", Controller.removeMedicine)

 export default medRouter