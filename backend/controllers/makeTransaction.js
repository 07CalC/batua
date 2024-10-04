import Family from "../models/family.js";
import User from "../models/user.js";

export const makeTransaction = async (req, res) => {
  try {
    const userId = req.userId;
    const name = req.name;
    const { amount, description, type } = req.body;

    if (!userId || !amount || !description || !type) {
      return res.status(400).json({ message: "insuffiecient data" });
    }
    await User.updateOne(
      { _id: userId },
      {
        $inc: { totalExpense: amount },
        
        $push: {
          transactions: {
            amount: amount,
            description: description,
            type: type,
            date: new Date().getDate(),
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
          },
        },
      }
    );
    await Family.updateOne(
      { members: userId },
      {
        $inc: { totalFamilyExpense: amount },
        
        $push: {
          transactions: {
            user: { userId: userId, name: name },
            amount: amount,
            type: type,
            description: description,
            date: new Date().getDate(),
            month: new Date().getMonth()+1,
            year: new Date().getFullYear(),
          },
        },
      }
    );
    return res.status(200).json({ message: "transaction created" });
  } catch (error) {
    console.log("error in makeTransaction ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
