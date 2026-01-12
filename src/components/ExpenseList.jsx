// ExpenseList.jsx
function ExpenseList({ expenses = [] }) {
  return (
    <div className="bg-white mt-6 p-4 sm:p-6 rounded-lg shadow w-full max-w-lg mx-auto">
      <h3 className="font-semibold mb-4 text-lg text-center">Expense List</h3>

      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center">No expenses yet</p>
      ) : (
        <div className="flex flex-col space-y-2">
          {expenses.map((e) => (
            <div
              key={e.id}
              className="flex justify-between items-center border-b py-2 last:border-b-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                <span className="font-medium">{e.title}</span>
                <span className="text-gray-500 text-sm">({e.category})</span>
              </div>
              <span className="text-red-600 font-semibold">₹{e.amount}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
