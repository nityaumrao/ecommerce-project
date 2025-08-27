import { useState } from "react";
import "./index.css"; // ✅ make sure Tailwind is imported here

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        Vite + React + Tailwind v4 🚀
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <button
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-700">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-6 text-gray-500">
        Tailwind is working 🎉
      </p>
    </div>
  );
}

export default App;
