import mongoose from "mongoose";
import User from "./user.js";

const familySchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    
    totalFamilyExpense: {
      type: Number,
      default: 0,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    familyId: {
      type: Number,
      required: true,
    },
    transactions: [
      {
        description: {
          type: String,
          required: true,
        },
        type:{
          type: String,
          enum: ["food", "clothing", "travel", "entertainment", "other"],
          required: true,
          default: "other",
        },
        amount: {
          type: Number,
          required: true,
        },
        date: {
          type: Number,
          required: true,
        },
        month: {
          type: Number,
          required: true,
        },
        year: {
          type: Number,
          required: true,
        },
        user: {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        }
      },
    ],
  },
  { timestamps: true }
);

const Family = new mongoose.model("Family", familySchema);

export default Family;
