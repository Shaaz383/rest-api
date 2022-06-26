import express, { application, Router } from 'express';
import registerController from '../controller/auth/registerController';
const app = express();


const router = express.Router();
app.use(express.json())

router.post("/register" ,registerController.register);

export default router;