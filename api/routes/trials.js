import express from 'express'
import { verifyAdmin } from '../utils/verifyToken.js';
import { createTrial, getTrials, updateTrial } from '../controllers/trial.js';

const router = express.Router();

//Create
router.post("/", createTrial);

//Update
router.put("/:id", verifyAdmin, updateTrial);

//Get All
router.get("/", verifyAdmin, getTrials);



export default router
