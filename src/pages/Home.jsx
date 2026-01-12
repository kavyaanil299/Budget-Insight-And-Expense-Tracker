// Home.jsx
function Home() {
  return (
    <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 py-16 sm:py-20">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
        SmartSpend
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-4 max-w-xl sm:max-w-2xl">
        SmartSpend helps you track expenses, manage income,
        and analyze your spending with smart reports and charts.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
        <a
          href="/signup"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="/login"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition w-full sm:w-auto"
        >
          Login
        </a>
      </div>
    </div>
  );
}

export default Home;

