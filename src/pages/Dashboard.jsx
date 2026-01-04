
import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import Summary from "../components/Summary";
import ExpenseChart from "../components/ExpenseChart";
import IncomeExpenseChart from "../components/IncomeExpenseChart";

function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (item) => {
    setTransactions([...transactions, item]);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">
        SmartSpend – Expense Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <ExpenseForm addTransaction={addTransaction} />
        <Summary transactions={transactions} />
      </div>

      <IncomeExpenseChart transactions={transactions} />
      <ExpenseChart expenses={transactions.filter(t => t.type === "expense")} />
      <ExpenseList expenses={transactions} />
    </div>
  );
}

export default Dashboard;
