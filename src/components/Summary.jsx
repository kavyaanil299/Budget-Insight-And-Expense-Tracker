function Summary({ transactions }) {
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Summary</h3>

      <p className="text-green-600">Income: ₹{income}</p>
      <p className="text-red-600">Expense: ₹{expense}</p>
      <p className="font-bold mt-2">Balance: ₹{balance}</p>
    </div>
  );
}

export default Summary;
