function ExpenseList({ expenses }) {
  return (
    <div className="bg-white mt-6 p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Transactions</h3>

      {expenses.length === 0 && (
        <p className="text-gray-500">No transactions yet.</p>
      )}

      {expenses.map((e) => (
        <div
          key={e.id}
          className="flex justify-between border-b py-2"
        >
          <span>
            {e.title}
            <span className="text-sm text-gray-500 ml-2">
              ({e.category})
            </span>
          </span>
          <span className="font-semibold text-red-600">₹{e.amount}</span>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
