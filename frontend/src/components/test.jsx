import { useEffect, useState } from "react";

const Main = () => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.firstName) {
      setFirstName(user.firstName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <nav className="bg-white shadow-md w-full max-w-4xl mx-auto p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-3xl font-bold text-blue-600">fakebook</h1>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-medium text-gray-700">Welcome, {firstName}!</span>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Main;
