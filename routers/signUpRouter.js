import { Router } from "express";
import * as Controller from '../controllers/controller.js';

const signUpRpute = Router();

signUpRpute.get('/sign-up', Controller.renderSignUpPage);

signUpRpute.post('/sign-up', Controller.handleSignUp)

export default signUpRpute