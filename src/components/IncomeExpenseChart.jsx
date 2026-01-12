// IncomeExpenseChart.jsx
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function IncomeExpenseChart({ transactions = [] }) {
  if (transactions.length === 0) return null;

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((s, t) => s + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((s, t) => s + t.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#34d399", "#f87171"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow mt-6 w-full max-w-lg mx-auto">
      <h3 className="font-semibold mb-3 text-lg text-center">Income vs Expense</h3>

      <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
        <Bar data={data} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

export default IncomeExpenseChart;

