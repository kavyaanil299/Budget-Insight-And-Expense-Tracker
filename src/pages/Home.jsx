import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">
          Welcome to SmartSpend
        </h1>

        {/* Login Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Login</h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />

          <Link to="/dashboard">
            <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              Login
            </button>
          </Link>
        </div>

        <hr className="my-6" />

        {/* Signup Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Sign Up</h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 border rounded"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 p-2 border rounded"
          />

          <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
