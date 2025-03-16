import jwt from "jsonwebtoken";

const genrateTokenAndCookie = (userid, res) => {
  const token = jwt.sign({ userid }, process.env.SECRETKEY, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // here the expire write in this form totalday * 24h * 1h * 60min * 1milisec
    HttpOnly: true, // to pervet the xxs attack
    sameSite: "strict", // to pervet the csrf attack
    secure: process.env.NODE_ENV !== "development",
  });
};
export default genrateTokenAndCookie;
