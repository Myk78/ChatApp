import express from "express";
import protectRouter from "../middleware/protectroute.js";
import { getUserFromSidebar } from "../controller/userController.js";

const router = express.Router();

router.get("/", protectRouter, getUserFromSidebar);

export default router;
