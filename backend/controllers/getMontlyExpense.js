

import User from "../models/user.js"


export const getMonthlyExpense = async (req, res) => {
    try {
        const userId = req.userId
        const { month, year } = req.body
        if (!month || !year) {
            return res.status(400).json({ message: "invalid data" })
        }
    const user = await User.findOne({ _id: userId })
    const monthlyExpense = user.transactions.filter((item) => item.month === parseInt(month) && item.year === parseInt(year))
    
   
        if (monthlyExpense.length === 0) {
            return res.status(400).json({ message: "Not Found" })
        }
        
        res.status(200).json({ monthlyExpense })
    }
    catch (error) {
        console.log("error in getDailyExpense ", error)
        res.status(500).json({ message: "internal server error" })
    }
}
