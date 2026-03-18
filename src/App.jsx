import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="w-[365px] h-[680px] border-2 border-gray-300 rounded-sm bg-gray-50 shadow-xl overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
