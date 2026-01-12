import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";

function App() {
  const [transactions, setTransactions] = useState([]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                transactions={transactions}
                setTransactions={setTransactions}
              />
            }
          />
          <Route
            path="/reports"
            element={<Reports transactions={transactions} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
