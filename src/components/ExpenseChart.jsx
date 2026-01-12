// ExpenseChart.jsx
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses = [] }) {
  if (expenses.length === 0) return null;

  const categories = ["Food", "Transport", "Bills", "Entertainment"];

  const data = {
    labels: categories,
    datasets: [
      {
        data: categories.map((c) =>
          expenses
            .filter((e) => e.category === c)
            .reduce((s, e) => s + e.amount, 0)
        ),
        backgroundColor: ["#60a5fa", "#34d399", "#fbbf24", "#f87171"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-6 w-full max-w-lg mx-auto">
      <h3 className="font-semibold text-lg mb-3 text-center">
        Category-wise Expense
      </h3>

      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px]">
        <Pie data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

export default ExpenseChart;

