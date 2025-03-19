import mongoose from "mongoose";

const coversationSchema = mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  message: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      default: [],
    },
  ],
});

const conversation = mongoose.model("conversation", coversationSchema);
export default conversation;
