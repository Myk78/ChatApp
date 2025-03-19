import express from "express";
import { sendMessage, getMessages } from "../controller/messageController.js";
import protectRouter from "../middleware/protectroute.js";
const router = express.Router();

// router.get("/message_send", () => {
//   res.send("gaya msg");
// });
router.get("/:id", protectRouter, getMessages);
router.post("/sendMessage/:id", protectRouter, sendMessage);

export default router;
