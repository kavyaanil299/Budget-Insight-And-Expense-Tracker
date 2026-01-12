 // Summary.jsx
const Summary = ({ transactions = [] }) => {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow w-full max-w-md mx-auto">
      <h3 className="font-semibold mb-4 text-lg text-center">Summary</h3>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:space-x-4 text-center sm:text-left">
        <p className="text-green-600 font-medium mb-2 sm:mb-0">
          Income: ₹{income}
        </p>
        <p className="text-red-600 font-medium mb-2 sm:mb-0">
          Expense: ₹{expense}
        </p>
        <p className="font-bold">
          Balance: ₹{income - expense}
        </p>
      </div>
    </div>
  );
};

export default Summary;

