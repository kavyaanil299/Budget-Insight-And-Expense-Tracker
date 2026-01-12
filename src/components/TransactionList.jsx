// TransactionList.jsx
const TransactionList = ({ transactions = [], setTransactions }) => {
  return (
    <div className="bg-white mt-6 p-4 sm:p-6 rounded-lg shadow w-full max-w-lg mx-auto">
      <h3 className="font-semibold mb-4 text-lg text-center">All Transactions</h3>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center">No transactions yet</p>
      ) : (
        <div className="flex flex-col space-y-2">
          {transactions.map((t) => (
            <div
              key={t.id}
              className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b py-2 last:border-b-0"
            >
              <span className="font-medium">
                {t.title} <span className="text-gray-500">({t.type})</span>
              </span>
              <button
                onClick={() =>
                  setTransactions(transactions.filter((x) => x.id !== t.id))
                }
                className="mt-1 sm:mt-0 text-red-600 hover:text-red-800 transition"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;

