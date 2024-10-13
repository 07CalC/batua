// primary = #b7bab4
// secondary = #e2dfd4
// textcol = #0b1214

// const date = (new Date("2024-10-10").getMonth() +1 + "-" + new Date("2024-10-10").getFullYear());
// console.log(date)
// console.log(new Date(date).getMonth + "-" + new Date(date).getFullYear())


var food=0, clothing=0, travel=0, entertainment=0, other  = 0;

// food +=50;
// clothing += 100;
// travel += 300;
// entertainment += 400;
// other += 500;


// const numbers = {food, clothing, travel, entertainment, other};

// const maxVal = Math.max(...Object.values(numbers))
// const key = Object.keys(numbers).find(key => numbers[key] === maxVal)


// console.log(key, maxVal)



<div className="flex flex-col w-full ">
      <div className="grid w-full items-center justify-center md:flex mt-8">
        <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
            <div className="flex justify-between">
                <div><p className="text-lg font-semibold">Total Monthly Expense</p></div>
                <div className="flex items-center justify-center"><LiaRupeeSignSolid className="text-lg text-accent" /></div>
                
            </div>
            <div className="mt-8 items-center flex text-3xl font-bold"><LiaRupeeSignSolid/>{context.monthlyFamilyExpense.monthlyExpense}</div>
            <div className="mt-1 items-center flex text-lg text-accent">+2.5% from Last Month</div>
        </div>
        <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
            <div className="flex justify-between">
                <div><p className="text-lg font-semibold">Average daily spend</p></div>
                <div className="flex items-center justify-center"><FaCoins className="text-xl text-accent" /></div>
                
            </div>
            <div className="mt-8 items-center flex text-3xl font-bold"><LiaRupeeSignSolid/>{Math.round(context.monthlyFamilyExpense.monthlyExpense /30 * 100) / 100}</div>
            
            
            <div className="mt-1 items-center flex text-lg text-accent">-5.6% from last month</div>
           
        </div>
        <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
            <div className="flex justify-between">
                <div><p className="text-lg font-semibold">Top Category</p></div>
                <div className="flex items-center justify-center"><HiChartPie className="text-lg text-accent" /></div>
                
            </div>
            <div className="mt-8 items-center flex text-3xl font-bold">{context.monthlyFamilyExpense.type}</div>
            <div className="mt-1 items-center flex text-lg text-accent"><LiaRupeeSignSolid />{context.monthlyFamilyExpense.typeAmount} spent on {context.monthlyFamilyExpense.type}</div>
        </div>

        <div className="w-1/3 border-2 border-border bg-secondary flex mx-2 flex-col p-4 py-8 rounded-xl">
            <div className="flex justify-between">
                <div><p className="text-lg font-semibold">Top Family Spender</p></div>
                <div className="flex items-center justify-center"><TbUser className="text-lg text-accent" /></div>
                
            </div>
            <div className="mt-8 items-center flex text-3xl font-bold">John</div>
            <div className="mt-1 items-center flex text-lg text-accent">Jane Last Month</div>
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
          {!isAnalytics && <RecentExpenses dailyExpense={dailyExpense}/>}
          {isAnalytics && <Analytics lineGraphData={lineGraphData} categoryData={categoryData} />}
      </div>
