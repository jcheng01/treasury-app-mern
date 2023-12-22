import { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleemailBlur = (e) => {
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (
      !e.target.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      //match returns false if theres no num, but we want it to be true so the if statemtn executes
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };
  const handlepasswordBlur = (e) => {
    if (e.target.value.length < 9) {
      setPasswordError("Password should be more than 8 characters");
    } else {
      setPasswordError("");
    }
  };

  return (
    <form className=" flex flex-col items-center justify-center my-24">
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Sign In</h1>

      <div className="mb-2 ">
        <label
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold "
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
            emailError && "border-red-500"
          }`}
          placeholder="jcheng01@syr.edu"
          onChange={handleChange}
          onBlur={handleemailBlur}
        />
        <p className="text-red-500 text-xs italic h-4">{emailError}</p>
      </div>

      <div className="mb-2 ">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold "
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
            passwordError && "border-red-500"
          }`}
          placeholder="password"
          onChange={handleChange}
          onBlur={handlepasswordBlur}
        />
        <p className="text-red-500 text-xs italic h-4">{passwordError}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Register
      </button>
    </form>
  );
}

export default Signin;
