import { BarChart, LineChart, PieArc, PieChart } from "@mui/x-charts";

export const MonthlyTracker = () => {
    return (
        <div className="bg-secondary h-11/12 mt-10 rounded-2xl font-algerian shadow-[_10px_10px_30px_4px_rgba(0,0,0,0.55)] flex flex-col p-6 items-center">
      <div className="text-3xl text-textcol font-bold">
        Monthly Expenses tracker
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-start items-center">
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            width={800}
            height={600}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "FOOD" },
                  { id: 1, value: 15, label: "ENTERTAINMENT" },
                  { id: 2, value: 20, label: "TRAVEL" },
                  { id: 3, value: 25, label: "CLOTHING" },
                  { id: 4, value: 30, label: "OTHER" },
                ],
              },
            ]}
            width={485}
            height={200}
            className="hover:scale-110"
          />
          <BarChart
            xAxis={[
              { scaleType: "band", data: ["group A", "group B", "group C"] },
            ]}
            series={[
              { data: [4, 3, 5] },
              { data: [1, 6, 3] },
              { data: [2, 5, 6] },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </div>
    )
}