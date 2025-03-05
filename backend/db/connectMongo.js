import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_DB_URI);
    console.log("database is connect..");
  } catch (error) {
    console.log("something is wrong in db", error.message);
  }
};
export default connectMongoDb;
