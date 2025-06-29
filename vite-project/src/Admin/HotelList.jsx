import { useState } from "react";
import { roomsDummyData } from "../quickStay-assets/assets/assets";

const HotelList = () => {

  // Track toggle status for each row by index
  const [toggleStates, setToggleStates] = useState({});

  // Toggle function specific to each button
  const handleToggleButton = (index) => {
    setToggleStates((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific index
    }));
  };

  return (
    <div className="">
      <h1 className="text-xl md:text-2xl mb-3 font-serif text-gray-800">
        Room Listings
      </h1>
      <p className="py-2 text-sm text-gray-700 lg:w-[700px]">
        View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.
      </p>
      <p className="pt-7 text-gray-700 font-medium">Total Hotels: {roomsDummyData.length}</p>

      <div className="mt-7 overflow-x-auto mb-12">
        <table className="min-w-[600px] w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-3 border border-gray-300">Name</th>
              <th className="px-4 py-3 border border-gray-300">Facility</th>
              <th className="px-4 py-3 border border-gray-300">Price/Night</th>
              <th className="px-4 py-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roomsDummyData.map((item, index) => (
              <tr key={index} className="text-gray-700 text-sm text-center even:bg-gray-50">
                <td className="px-4 py-3 border border-gray-300">{item.roomType}</td>
                <td className="px-4 py-3 border border-gray-300">{item.amenities}</td>
                <td className="px-4 py-3 border border-gray-300">${item.pricePerNight}</td>
                <td className="px-4 py-3 border border-gray-300">
                  <div
                    className={`h-8 w-16 rounded-2xl cursor-pointer transition-all duration-300 flex p-1 ${toggleStates[index] ? 'bg-blue-800' : 'bg-gray-400'}`}
                    onClick={() => handleToggleButton(index)}
                  >
                    <button
                      className={`bg-white h-6 w-6 rounded-[50%] transition-all duration-300 ${toggleStates[index] ? 'translate-x-7' : 'translate-x-0'}`}
                    ></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelList;
