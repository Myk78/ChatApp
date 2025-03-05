import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectMongoDb from "./db/connectMongo.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world guyz");
});

app.use("/api/auth/", authRoutes);

app.listen(PORT, () => {
  connectMongoDb(), console.log(`server is runing completly fine.. ${PORT} `);
});
