import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ expenses }) {
  const categories = ["Food", "Transport", "Bills", "Entertainment"];

  const dataByCategory = categories.map((cat) =>
    expenses
      .filter((e) => e.category === cat)
      .reduce((sum, e) => sum + e.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: dataByCategory,
        backgroundColor: [
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#f87171",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">
        Category-wise Spending
      </h3>

      {expenses.length === 0 ? (
        <p className="text-gray-500">Add expenses to see chart.</p>
      ) : (
        <Pie data={data} />
      )}
    </div>
  );
}

export default ExpenseChart;
