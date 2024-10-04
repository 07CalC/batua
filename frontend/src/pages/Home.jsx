
import { MonthlyTracker } from "../components/MonthlyTracker";
import { RecentTransactions } from "../components/RecentTransactions";

export const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
    <div>
    <RecentTransactions />
    </div>
    <div >
    <MonthlyTracker />
    </div>
    </div>
  );
};
