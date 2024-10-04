import Family from "../models/family.js"



export const getMonthlyFamilyExpense = async (req, res) => {
    try {
        const { month, year } = req.body
        if (!month || !year) {
            return res.status(400).json({ message: "invalid data" })
        }
        const family = await Family.findOne({ members: req.userId })
        if(!family){
            return res.status(400).json({ message: "Not Found" })
        }
        const monthlyExpense = family.transactions.filter((item) => item.month === parseInt(month) && item.year === parseInt(year))
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