// Footer.jsx
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* App Info */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-semibold text-white">SmartSpend</h2>
          <p className="text-sm mt-2">
            Smart expense tracking and budget management made easy.
          </p>
        </div>

        {/* Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/add" className="hover:text-white">
                Add Expense
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:text-white">
                Reports
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <p className="text-sm">Email: support@SmartSpend.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-3 text-sm">
        © {new Date().getFullYear()} SmartSpend. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

