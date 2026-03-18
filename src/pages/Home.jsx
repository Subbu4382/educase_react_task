import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col justify-end p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>

        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div>
        <button
          onClick={() => navigate("/register")}
          className="w-full bg-[#6C25FF] text-white py-3 rounded-lg mb-3"
        >
          Create Account
        </button>

        <button
          onClick={() => navigate("/login")}
          className="w-full bg-[#E5D9FF] text-black py-3 rounded-lg"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
