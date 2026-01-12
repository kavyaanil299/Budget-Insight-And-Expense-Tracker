// ExpenseForm.jsx
import { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    addTransaction({
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
    });

    setTitle("");
    setAmount("");
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white p-4 sm:p-6 rounded-lg shadow w-full max-w-md mx-auto"
    >
      <h3 className="font-semibold mb-4 text-lg text-center">Add Transaction</h3>

      <input
        className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {type === "expense" && (
        <select
          className="w-full border border-gray-300 p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>
      )}

      <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition">
        Add
      </button>
    </form>
  );
}

export default ExpenseForm;
