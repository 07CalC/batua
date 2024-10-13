import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiMoneyBill } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";
import { useContext, useState } from "react";
import { AllContext } from "../context/context";
import { ContinuousColorLegend } from "@mui/x-charts";
import { GoGraph } from "react-icons/go";
import { RecentExpenses } from "./RecentExpenses";
import { TbUser, TbUsers } from "react-icons/tb";
import { HiChartPie } from "react-icons/hi2";
import { FaCoins } from "react-icons/fa";
import { Analytics } from "./Analytics";

export const Family = () => {
  const context = useContext(AllContext);
  const dailyExpense = context.dailyFamilyExpense;
  const [isAnalytics, setIsAnalytics] = useState(false);
  const lineGraphData = context.familyLineGraphData.data;
  const categoryData = [
    {
      name: "Food",
      value: context.monthlyFamilyExpense.food,
    },
    {
      name: "Clothing",
      value: context.monthlyFamilyExpense.clothing,
    },
    {
      name: "Travel",
      value: context.monthlyFamilyExpense.travel,
    },
    {
      name: "Entertainment",
      value: context.monthlyFamilyExpense.entertainment,
    },
    {
      name: "Other",
      value: context.monthlyFamilyExpense.other,
    },
  ];
  return (
    <>
      {!context.signedUser.family && (
        <div className="flex flex-col items-center justify-center w-full bg-secondary border-2 mt-8 border-border p-4 rounded-xl">
          <img
            src="https://media1.tenor.com/m/aSkdq3IU0g0AAAAC/laughing-cat.gif"
            className="w-1/4 rounded-xl self-center"
          />
          <strong className="text-3xl text-center font-algerian font-bold">
            LMAO, orphan
          </strong>
          <div className="flex w-1/6 mt-7 justify-between">
            <button className="flex items-center justify-center bg-secondary border-[3px] border-border hover:bg-accent hover:text-[#ffffff] hover:border-accent text-white rounded-xl p-2 font-bold">
              Join Family
            </button>
            <button className="flex items-center justify-center bg-accent text-[#ffffff] hover:bg-secondary hover:border-[3px] hover:border-border hover:text-textcol rounded-xl p-2  font-bold">
              Make Family
            </button>
          </div>
        </div>
      )}
      {context.signedUser.family && (
        <div className="flex flex-col w-full ">
          <div className="grid w-full items-center justify-center md:flex mt-8">
            <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Total Monthly Expense</p>
                </div>
                <div className="flex items-center justify-center">
                  <LiaRupeeSignSolid className="text-lg text-accent" />
                </div>
              </div>
              <div className="mt-8 items-center flex text-3xl font-bold">
                <LiaRupeeSignSolid />
                {context.monthlyFamilyExpense.monthlyExpense}
              </div>
              <div className="mt-1 items-center flex text-lg text-accent">
                +2.5% from Last Month
              </div>
            </div>
            <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Average daily spend</p>
                </div>
                <div className="flex items-center justify-center">
                  <FaCoins className="text-xl text-accent" />
                </div>
              </div>
              <div className="mt-8 items-center flex text-3xl font-bold">
                <LiaRupeeSignSolid />
                {Math.round(
                  (context.monthlyFamilyExpense.monthlyExpense / 30) * 100
                ) / 100}
              </div>

              <div className="mt-1 items-center flex text-lg text-accent">
                -5.6% from last month
              </div>
            </div>
            <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Top Category</p>
                </div>
                <div className="flex items-center justify-center">
                  <HiChartPie className="text-lg text-accent" />
                </div>
              </div>
              <div className="mt-8 items-center flex text-3xl font-bold">
                {context.monthlyFamilyExpense.type}
              </div>
              <div className="mt-1 items-center flex text-lg text-accent">
                <LiaRupeeSignSolid />
                {context.monthlyFamilyExpense.typeAmount} spent on{" "}
                {context.monthlyFamilyExpense.type}
              </div>
            </div>

            <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
              <div className="flex justify-between">
                <div>
                  <p className="text-lg font-semibold">Top Family Spender</p>
                </div>
                <div className="flex items-center justify-center">
                  <TbUser className="text-lg text-accent" />
                </div>
              </div>
              <div className="mt-8 items-center flex text-3xl font-bold">
                John
              </div>
              <div className="mt-1 items-center flex text-lg text-accent">
                Jane Last Month
              </div>
            </div>
          </div>
          <div className="w-1/5 flex items-center mt-5">
            <div
              onClick={() => setIsAnalytics(false)}
              className={`text-lg cursor-pointer flex items-center justify-center ${
                isAnalytics
                  ? "text-accent"
                  : "bg-secondary rounded-lg border border-border"
              } w-1/2 text-center font-semibold`}
            >
              <VscGraph className="mx-2" /> Expense{" "}
            </div>
            <div
              onClick={() => setIsAnalytics(true)}
              className={`text-lg cursor-pointer flex items-center justify-center ${
                isAnalytics
                  ? "bg-secondary rounded-lg border border-border"
                  : "text-accent"
              } font-semibold w-1/2 text-center`}
            >
              <GoGraph className="mx-2" /> Analytics{" "}
            </div>
          </div>
          {!isAnalytics && <RecentExpenses dailyExpense={dailyExpense} />}
          {isAnalytics && (
            <Analytics
              lineGraphData={lineGraphData}
              categoryData={categoryData}
            />
          )}
        </div>
      )}
    </>
  );
};
