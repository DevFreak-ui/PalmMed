import express from 'express';
import { initiateMessage } from '../controllers/message.controller';



const router = express.Router();

router.post("/initiate-message", initiateMessage);



export default router;
