import { Router } from "express";
import * as Controller from '../controllers/controller.js';

const signUpRpute = Router();

signUpRpute.get('/sign-up', Controller.renderSignUpPage);

export default signUpRpute