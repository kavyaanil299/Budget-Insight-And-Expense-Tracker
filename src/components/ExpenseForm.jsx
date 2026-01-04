import { useState } from "react";

function ExpenseForm({ addTransaction }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense"); // income or expense
  const [category, setCategory] = useState("Food");

  const handleSubmit = (e) => {
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
    <form className="bg-white p-4 rounded shadow" onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-3">Add Transaction</h3>

      <input
        className="w-full mb-3 p-2 border rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        className="w-full mb-3 p-2 border rounded"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="w-full mb-3 p-2 border rounded"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {type === "expense" && (
        <select
          className="w-full mb-3 p-2 border rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Bills</option>
          <option>Entertainment</option>
        </select>
      )}

      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Add
      </button>
    </form>
  );
}

export default ExpenseForm;
