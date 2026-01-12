// Reports.jsx
import { Navigate } from "react-router-dom";

function Reports({ transactions = [] }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
        Reports 📄
      </h1>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">
          No transactions available to generate reports.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-3 sm:px-4 text-left">Title</th>
                <th className="py-2 px-3 sm:px-4 text-left">Amount</th>
                <th className="py-2 px-3 sm:px-4 text-left">Type</th>
                <th className="py-2 px-3 sm:px-4 text-left">Category</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="text-sm sm:text-base border-b hover:bg-gray-50"
                >
                  <td className="py-2 px-3 sm:px-4">{tx.title}</td>
                  <td className="py-2 px-3 sm:px-4">₹{tx.amount}</td>
                  <td
                    className={`py-2 px-3 sm:px-4 font-medium ${
                      tx.type === "income" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {tx.type}
                  </td>
                  <td className="py-2 px-3 sm:px-4">{tx.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Reports;
