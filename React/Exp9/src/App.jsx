import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);  // Initial count
  const [step, setStep] = useState(1);     // Step size

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-lg p-10 w-96 text-center border border-gray-300">

        <h1 className="text-4xl font-bold text-gray-800 mb-6">Count: {count}</h1>

        <div className="mb-6">
          <label className="block text-gray-600 text-lg mb-2">Step Size</label>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value) || 1)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div className="flex justify-between mb-4">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={increment}
            className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Increment
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-gray-400 text-white px-4 py-3 rounded-lg hover:bg-gray-500 transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
