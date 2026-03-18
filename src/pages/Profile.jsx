import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <div className="bg-white py-1 px-4">
        <h1 className="text-xl font-bold mt-4 mb-8">Account Settings</h1>
      </div>
      <div className="p-6 bg-gray-100 h-full">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
            />

            <div className="absolute bottom-0 right-0 bg-[#6C25FF] p-1.5 rounded-full">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>

          <div>
            <h2 className="font-semibold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing amet minus laudantium assumenda
          possimus animi? in laborum consequuntur modi!
        </p>

        <hr className="mt-4" />
      </div>
    </>
  );
}
