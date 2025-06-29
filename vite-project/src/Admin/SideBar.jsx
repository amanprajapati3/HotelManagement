import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const SideBar = ({ setComponent, component }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
    setIsMenuOpen(false); // Close the menu on mobile after navigation
  };

  const handleComponents = (value) => {
    setComponent(value);
    setIsMenuOpen(false); // Close the menu on mobile after selection
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed left-2  top-7 z-50">
        <button className="text-3xl cursor-pointer text-gray-800" onClick={toggleMenu}>
          {isMenuOpen ? <FaArrowLeft /> : <RiMenu2Fill />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-16 sm:top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:z-auto`}
      >
        <div className="text-sm">
          <ul className="w-full px-2">
            <li className="mb-5">
              <button
                onClick={() => handleComponents("Dash")}
                className={`w-full py-3  cursor-pointer border-r-4 border-r-blue-700 hover:bg-blue-400 transition ${
                  component === "Dash" ? "bg-blue-600 text-white" : "bg-blue-200"
                }`}
              >
                Dashboard
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => handleComponents("Hotels")}
                className={`w-full py-3  cursor-pointer border-r-4 border-r-blue-700 hover:bg-blue-400 transition ${
                  component === "Hotels" ? "bg-blue-600 text-white" : "bg-blue-200"
                }`}
              >
                Hotel List
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={() => handleComponents("UploadHotels")}
                className={`w-full py-3 cursor-pointer border-r-4 border-r-blue-700 hover:bg-blue-400 transition ${
                  component === "UploadHotels" ? "bg-blue-600 text-white" : "bg-blue-200"
                }`}
              >
                Add Rooms
              </button>
            </li>
            <li className="mb-5">
              <button
                onClick={goToHome}
                className="w-full py-3  cursor-pointer border-r-4 border-r-blue-700 hover:bg-blue-400 bg-blue-200 transition"
              >
                Home
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
