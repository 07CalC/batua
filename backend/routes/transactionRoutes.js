import express from "express";
import { getUserId } from "../middlewares/getUserIDFromCookie.js";
import { makeTransaction } from "../controllers/makeTransaction.js";
import { getDailyExpense } from "../controllers/getDailyExpense.js";
import { getMonthlyExpense } from "../controllers/getMontlyExpense.js";
import { getMonthlyFamilyExpense } from "../controllers/getMonthlyFamilyExpense.js";
import { getDailyFamilyExpense } from "../controllers/getDailyFamilyExpense.js";
import {  getLineGraphData } from "../controllers/getLineGraphData.js";
import { getFamilyLineGraphData } from "../controllers/getFamilyLineGraphData.js";


const router = express.Router()

router.post("/maketransaction", getUserId, makeTransaction)
router.post("/getdailyexpense", getUserId, getDailyExpense)
router.post("/getmonthlyexpense", getUserId, getMonthlyExpense)
router.post("/getmonthlyfamilyexpense", getUserId, getMonthlyFamilyExpense)
router.post("/getdailyfamilyexpense", getUserId, getDailyFamilyExpense)
router.post("/getLineGraphData", getUserId, getLineGraphData)
router.post("/getFamilyLineGraphData", getUserId, getFamilyLineGraphData)


export default router