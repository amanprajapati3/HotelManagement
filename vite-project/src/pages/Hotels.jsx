import React, { useState } from "react";
import { assets, roomsDummyData } from "../quickStay-assets/assets/assets";
import { NavLink } from "react-router-dom";

const Hotels = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== value));
    }
  };

  const filteredRooms = roomsDummyData
    .filter((room) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(room.roomType)
      ) {
        return false;
      }
      if (selectedPriceRanges.length > 0) {
        const inRange = selectedPriceRanges.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return room.pricePerNight >= min && room.pricePerNight <= max;
        });
        if (!inRange) return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortOption === "highToLow") return b.pricePerNight - a.pricePerNight;
      if (sortOption === "lowToHigh") return a.pricePerNight - b.pricePerNight;
      return 0;
    });

  const handlePriceRangeChange = (e) => {
    const { value, checked } = e.target;
    setSelectedPriceRanges((prev) =>
      checked ? [...prev, value] : prev.filter((range) => range !== value)
    );
  };

  const handleSortChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSortOption(value);
    } else {
      setSortOption("");
    }
  };

  return (
    <>
      <div className="px-2 md:mt-32 mt-20 sm:px-5 lg:px-20 mb-10">
        <div className="flex justify-between">
          <h1 className="text-xl md:text-2xl mb-3">Hotels Rooms</h1>
          <div className="sm:hidden mt-1 mr-2">
            <select
              onChange={(e) => {
                const value = e.target.value;

                if (
                  [
                    "Single Bed",
                    "Double Bed",
                    "Luxury Room",
                    "Family Suite",
                  ].includes(value)
                ) {
                  handleCategoryChange({ target: { value, checked: true } });
                } else if (
                  ["0-500", "500-1000", "1000-2000", "2000-3000"].includes(
                    value
                  )
                ) {
                  handlePriceRangeChange({ target: { value, checked: true } });
                } else if (["highToLow", "lowToHigh"].includes(value)) {
                  handleSortChange({ target: { value, checked: true } });
                }
              }}
              name=""
              id=""
              className="bg-amber-500 text-white px-1 py-1 outline-none focus:bg-amber-700 w-[100px] rounded-md"
            >
              <option value="">Filter</option>
              <option value=" Single Bed"> Single Bed</option>
              <option value="Double Bed"> Double Bed</option>
              <option value="Luxury Room">Luxury Room</option>
              <option value="Family Suite">Family Suite</option>
              <option value="0-500">$ 0 to 500</option>
              <option value="500-1000">$ 500 to 1000</option>
              <option value="1000-2000">$ 1000 to 2000</option>
              <option value="">$ 2000 to 3000</option>
              <option value="highToLow">High To Low</option>
              <option value="lowToHigh">Low To High</option>
            </select>
          </div>
        </div>

        <p className="text-sm">
          Take advantage of our limited-time offers and special packages to
          enhance your stay and create unforgettable memories.
        </p>
        <div className="mt-10 flex justify-center-safe sm:justify-between ">
          <div className="text-sm">

            {filteredRooms.map((room, index) => (
              <NavLink to={"/room-details/" + room._id} onClick={() => scrollTo(0, 0)}  key={index}>
              <div
                className="flex sm:justify-start justify-center p-3 border-b-2 border-gray-400 flex-wrap gap-3"
              >
                <img
                  src={room.images[0]}
                  alt=""
                  className=" sm:w-[350px] lg:w-[430px] h-[300px] rounded-md w-full"
                />
                <div className="text-gray-800">
                  <p className="pb-3">{room.hotel.city}</p>
                  <h1 className="text-xl font-medium font-serif">
                    {room.hotel.name}
                  </h1>
                  <div className="flex gap-1">
                    <img src={assets.starIconFilled} alt="" />
                    <img src={assets.starIconFilled} alt="" />
                    <img src={assets.starIconFilled} alt="" />
                    <img src={assets.starIconFilled} alt="" />
                    <img src={assets.starIconOutlined} alt="" />
                    <span className="pl-3 text-sm font-medium">
                      200+ reviews
                    </span>
                  </div>
                  <div className="flex w-fit overflow-hidden gap-1 my-4 ">
                    <img src={assets.locationIcon} alt="" />
                    <p>{room.hotel.address}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 mb-5">
                    <div className="flex gap-1">
                      <img src={assets.roomServiceIcon} alt="" />
                      <p className="text-sm">Room Service</p>
                    </div>
                    <div className="flex gap-1">
                      <img src={assets.mountainIcon} alt="" />
                      <p className="text-sm">Mountain View</p>
                    </div>
                    <div className="flex gap-1">
                      <img src={assets.poolIcon} alt="" />
                      <p className="text-sm">Pool Access</p>
                    </div>
                  </div>
                  <p className="font-medium text-xl">
                    {room.pricePerNight}/night
                  </p>
                </div>
              </div>
              </NavLink>
            ))}
          </div>
          <div className="border-2 border-gray-300 text-gray-800 hidden w-[300px] h-[400px] overflow-y-scroll sm:block ">
            <h1 className="border-b-2 p-2 border-gray-300 font-bold sticky top-0 bg-white">
              FILTERS
            </h1>
            <div className="p-2 text-sm">
              <p className="font-semibold ">Popular filters</p>
              <ul className="mt-3">
                <li className="py-1">
                  <input
                    type="checkbox"
                    value={"Single Bed"}
                    onChange={handleCategoryChange}
                    className="checkbox mr-2"
                  />
                  Single Bed
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"Double Bed"}
                    onChange={handleCategoryChange}
                    className="checkbox mr-2"
                  />
                  Double Bed
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"Luxury Room"}
                    onChange={handleCategoryChange}
                    className="checkbox mr-2"
                  />
                  Luxury Room
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"Family Suite"}
                    onChange={handleCategoryChange}
                    className="checkbox mr-2"
                  />
                  Family Suite
                </li>
              </ul>
              <p className="font-semibold pt-3">Price Range</p>
              <ul className="mt-3">
                <li className="py-1">
                  <input
                    type="checkbox"
                    value={"0-500"}
                    onChange={handlePriceRangeChange}
                    className="checkbox mr-2"
                  />
                  $ 0 to 500
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"500-1000"}
                    onChange={handlePriceRangeChange}
                    className="checkbox mr-2"
                  />
                  $ 500 to 1000
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"1000-2000"}
                    onChange={handlePriceRangeChange}
                    className="checkbox mr-2"
                  />
                  $ 1000 to 2000
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    value={"2000-3000"}
                    onChange={handlePriceRangeChange}
                    className="checkbox mr-2"
                  />
                  $ 2000 to 3000
                </li>
              </ul>
              <p className="font-semibold pt-3">Sort By Price</p>
              <ul className="mt-3">
                <li className="py-1">
                  <input
                    type="checkbox"
                    checked={sortOption === "highToLow"}
                    value={"highToLow"}
                    onChange={handleSortChange}
                    className="checkbox mr-2"
                  />
                  High to Low
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    checked={sortOption === "lowToHigh"}
                    value={"lowToHigh"}
                    onChange={handleSortChange}
                    className="checkbox mr-2"
                  />
                  Low to High
                </li>
                <li className="pb-1">
                  <input
                    type="checkbox"
                    onChange={handleSortChange}
                    className="checkbox mr-2"
                  />
                  Newest First
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
