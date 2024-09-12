import express from 'express'
import { loginController, registerController } from '../controller/authController.js';
import { requiredSignin } from './logged.js';

const router = express.Router()

router.post('/login',loginController)
router.post('/register',registerController)
router.get('/home',requiredSignin)

export default router;