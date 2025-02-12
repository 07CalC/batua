import Transaction from "../models/transaction.js";
import User from "../models/user.js";

export const getMonthlyExpense = async (req, res) => {
  try {
    const userId = req.userId;
    const date = req.body.date;
    var food=0, clothing=0, travel=0, entertainment=0, other=0;
    if (!date) return res.status(400).json({ message: "invalid data" });

    const transactions = await Transaction.find({
      userId: userId,
      month: new Date(date).getMonth() + 1 + "-" + new Date(date).getFullYear(),
    });
    if (transactions.length === 0)
      return res.status(200).json({ message: "nothing found" });
    var monthlyExpense = 0;
    transactions.forEach((transaction) => {
      monthlyExpense += transaction.amount;
      if (transaction.type === "food") food += transaction.amount;
      if (transaction.type === "clothing") clothing += transaction.amount;
      if (transaction.type === "travel") travel += transaction.amount;
      if (transaction.type === "entertainment")
        entertainment += transaction.amount;
      if (transaction.type === "other") other += transaction.amount;
    });

    const numbers = { food, clothing, travel, entertainment, other };

    const maxVal = Math.max(...Object.values(numbers));
    const key = Object.keys(numbers).find((key) => numbers[key] === maxVal);

    return res.status(200).json({ monthlyExpense: monthlyExpense, type: key, typeAmount: maxVal, food: food, clothing: clothing, travel: travel, entertainment: entertainment, other: other });
  } catch (error) {
    console.log("error in getDailyExpense ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
