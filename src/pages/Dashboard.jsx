// Dashboard.jsx
import { Navigate } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";
import ExpenseChart from "../components/ExpenseChart";
import IncomeExpenseChart from "../components/IncomeExpenseChart";
import TransactionList from "../components/TransactionList";

const Dashboard = ({ transactions, setTransactions }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const addTransaction = (t) =>
    setTransactions([...transactions, t]);

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-8 space-y-6">
      {/* Form and Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseForm addTransaction={addTransaction} />
        <Summary transactions={transactions} />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IncomeExpenseChart transactions={transactions} />
        <ExpenseChart
          expenses={transactions.filter((t) => t.type === "expense")}
        />
      </div>

      {/* Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseList
          expenses={transactions.filter((t) => t.type === "expense")}
        />
        <TransactionList
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
