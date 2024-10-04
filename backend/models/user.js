import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
      default: null,
    },
    
    totalExpense: {
      type: Number,
      default: 0,
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
        }
      },
    ],
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchema);

export default User;
