import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

function IncomeExpenseChart({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [income, expense],
        backgroundColor: ["#34d399", "#f87171"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Income vs Expense Comparison
      </h3>

      {transactions.length === 0 ? (
        <p className="text-gray-500">Add data to see comparison.</p>
      ) : (
        <Bar data={data} />
      )}
    </div>
  );
}

export default IncomeExpenseChart;
