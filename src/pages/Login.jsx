import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!form.email || !form.password) {
      alert("Please enter Details");
      return;
    }

    if (!user) {
      alert("User not found please register first");
      return;
    }

    if (user.email === form.email && user.password === form.password) {
      navigate("/profile");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="px-6 pt-8">
      <h1 className="text-[22px] font-bold leading-tight mb-2">
        Sign in to your <br /> PopX account
      </h1>

      <p className="text-gray-500 text-sm mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit
        amet.
      </p>

      <form onSubmit={handleSubmit}>
        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2 mb-4">
          <legend className="text-xs text-[#6C25FF] px-1">Email address</legend>
          <input
            type="email"
            placeholder="Enter Email Address"
            className="w-full bg-gray-50 pt-1 outline-none border-none text-sm"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </fieldset>

        <fieldset className="border border-gray-300 rounded-lg px-3 pb-2 mb-6">
          <legend className="text-xs text-[#6C25FF] px-1">Password</legend>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-gray-50 pt-1 outline-none border-none text-sm"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </fieldset>

        <button
          type="submit"
          className="w-full bg-[#9a9898] text-white py-3 rounded-lg text-md font-medium"
        >
          Login
        </button>
      </form>
    </div>
  );
}
