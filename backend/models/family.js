import mongoose from "mongoose";
import User from "./user";

const familySchema = new mongoose.Schema(
  {
    members: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: [],
    },
    totalFamilyExpense: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Family = new mongoose.model("Family", familySchema);

export default Family;
