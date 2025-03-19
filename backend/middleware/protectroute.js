import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protectRouter = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized user - No Token" });
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY);

    if (!decoded) {
      return res
        .status(401)
        .json({ error: "Unauthorized user - Invalid Token" });
    }

    const user = await User.findById(decoded.userid).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User not Found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute", error.message);
    res.status(500).json({ error: "Internal  Server Error " });
  }
};
export default protectRouter;
