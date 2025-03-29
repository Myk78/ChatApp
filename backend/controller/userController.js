import User from "../models/userModel.js";

export const getUserFromSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const filterUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );

    res.status(200).json(filterUser);
  } catch (error) {
    console.log("Erorr is getUserForSideBar in UserController:", error.message);
    res.status(500).json({ error: "Internal error " });
  }
};
