import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

function CreateItem() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
    // You can close the form after submission or show a success message
  };

  return (
    <>
      <div className="flex justify-center items-start pt-16">
        <button
          className="bg-slate-400 hover:bg-slate-600 text-white p-3 rounded-full text-3xl transition duration-300 ease-in-out"
          onClick={toggleForm}
        >
          <FaCirclePlus />
        </button>
      </div>
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-500">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col p-4 max-w-md mx-auto mt-8 bg-custom-green rounded-lg shadow-lg"
          >
            <label className="mb-2 font-bold text-lg" htmlFor="amount">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              className="mb-4 p-2 border rounded"
            />

            <label className="mb-2 font-bold text-lg" htmlFor="type">
              Type
            </label>
            <select id="type" className="mb-4 p-2 border rounded">
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <label className="mb-2 font-bold text-lg" htmlFor="date">
              Date
            </label>
            <input type="date" id="date" className="mb-4 p-2 border rounded" />
            <label className="mb-2 font-bold text-lg" htmlFor="notes">
              Notes
            </label>
            <input type="text" id="notes" className="mb-4 p-2 border rounded" />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
            >
              Submit
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={toggleForm}
            >
              Close
            </button>
            {/* Add submit button or any other elements as needed */}
          </form>
        </div>
      )}

      <div
        className={`transition duration-300 ease-in-out ${
          showForm ? "blur-sm" : ""
        }`}
      ></div>
    </>
  );
}

export default CreateItem;
