import { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
  });
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmemailError, setConfirmEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmpwError, setConfirmpwError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handlenameBlur = (e) => {
    if (e.target.value.length < 6) {
      setUsernameError("Should be at least 6 characters long");
    } else if (!e.target.value.match(/.*[0-9].*/)) {
      //match returns false if theres no num, but we want it to be true so the if statemtn executes
      setUsernameError("Should contain a number");
    } else {
      setUsernameError("");
    }
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
  const handleconfirmpwBlur = (e) => {
    // console.log(formData, e.target.value);
    if (e.target.value !== formData.password) {
      setConfirmpwError("Passwords should match");
    } else {
      setConfirmpwError("");
    }
  };
  const handleconfirmemailBlur = (e) => {
    if (e.target.value !== formData.email) {
      setConfirmEmailError("Emails should match");
    } else if (!e.target.value) {
      setConfirmEmailError("Enter email conformation");
    } else {
      setConfirmEmailError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <form
      className=" flex flex-col items-center justify-center my-24"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Sign Up</h1>
      <div className="mb-2 ">
        <label
          htmlFor="username"
          className="block text-gray-700 text-sm font-bold "
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          required
          className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
            usernameError && "border-red-500"
          }`}
          placeholder="jcheng01"
          minLength="5"
          pattern=".*[0-9].*"
          title="Username must have 5 char and a number"
          onChange={handleChange}
          onBlur={handlenameBlur}
        />
        <p className="text-red-500 text-xs italic h-4">{usernameError}</p>
      </div>
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
          htmlFor="confirmEmail"
          className="block text-gray-700 text-sm font-bold "
        >
          Confirm Email
        </label>
        <input
          type="email"
          id="confirmEmail"
          required
          className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
            confirmemailError && "border-red-500"
          }`}
          placeholder="jcheng01@syr.edu"
          onChange={handleChange}
          onBlur={handleconfirmemailBlur}
        />
        <p className="text-red-500 text-xs italic h-4">{confirmemailError}</p>
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
      <div className="mb-6">
        <label
          htmlFor="confirmPW"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPW"
          required
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 ${
            confirmpwError && "border-red-500"
          }`}
          placeholder="confirmPW"
          onChange={handleChange}
          onBlur={handleconfirmpwBlur}
        />
        <p className="text-red-500 text-xs italic h-4">{confirmpwError}</p>
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
