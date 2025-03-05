import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import genrateTokenAndCookie from "../utilis/jwtToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "password don't match" });
    }
    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json("username is already exists.");
    }
    // Hash password Area
    const hashedpasword = await bcrypt.hash(password, 10);

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashedpasword,
      gender,
      profilepic: gender === "male" ? maleProfilePic : femaleProfilePic,
    });

    if (newUser) {
      // generate the jwt token
      genrateTokenAndCookie(newUser._id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullname: newUser.fullname,
        username: newUser.username,
        password: newUser.password,
        profilepic: newUser.profilepic,
      });
    } else {
      res.status(400).json("user data is invalid");
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Error.." });
  }
};
export const login = (req, res) => {
  console.log("LoginUserController");
};
export const logout = (req, res) => {
  res.send("logout page");
  console.log("LogoutUserController");
};
