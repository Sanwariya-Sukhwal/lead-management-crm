import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        Lead Management CRM
      </h1>

      <div className="flex gap-6">
        <Link
          to="/"
          className="hover:text-gray-200"
        >
          Dashboard
        </Link>

        <Link
          to="/add-lead"
          className="hover:text-gray-200"
        >
          Add Lead
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;