import React, { useState } from "react";
import { assets } from "../quickStay-assets/assets/assets";

const UploadHotels = () => {
  const [images, setImages] = useState([null, null, null, null]);
  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    }
  });

  const handleImageChange = (index, file) => {
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };

  const handleAmenityChange = (amenity) => {
    setInput((prev) => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity], // toggle the checkbox state
      },
    }));
  };

  return (
    <div className="">
      <h1 className="text-xl md:text-2xl pl-4 mb-3 font-serif">Add Rooms</h1>
      <p className="py-2 pl-4 text-sm text-gray-700 lg:w-[700px]">
        Fill in the details carefully with accurate room information, pricing, and amenities to enhance the user booking experience.
      </p>

      <div className="mt-10 ml-4">
        <form action="">
          <div>
            <p className="font-medium mb-3">Images</p>
            <div className="flex gap-3 flex-wrap">
              {images.map((image, index) => (
                <label key={index} htmlFor={`image${index}`} className="my-2 w-fit cursor-pointer">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.uploadArea}
                    className="w-32 h-32 object-cover rounded-md "
                    alt="Upload Preview"
                  />
                  <input
                    type="file"
                    id={`image${index}`}
                    onChange={(e) => handleImageChange(index, e.target.files[0])}
                    required
                    className="hidden"
                  />
                </label>
              ))}
            </div>

            {/* Room Type and Price */}
            <div className="flex flex-wrap gap-5 mt-5">
              <div>
                <p className="font-medium">Room Type</p>
                <select
                  required
                  value={input.roomType}
                  onChange={(e) => setInput({ ...input, roomType: e.target.value })}
                  className="mt-2 border border-gray-400 px-5 py-2 rounded-md text-gray-800 outline-none focus:border-gray-500"
                >
                  <option value="">Select Room Type</option>
                  <option value="Double bed">Double bed</option>
                  <option value="Single bed">Single bed</option>
                </select>
              </div>
              <div>
                <p className="font-medium">Price/night</p>
                <input
                  required
                  value={input.pricePerNight}
                  onChange={(e) => setInput({ ...input, pricePerNight: e.target.value })}
                  type="number"
                  placeholder="0"
                  className="outline-none rounded-md py-1.5 w-[120px] px-3 border border-gray-400 mt-2 focus:border-gray-500"
                />
              </div>
            </div>

            <div className="mt-5">
              <h1 className="font-medium pb-2">Amenities</h1>
              {Object.keys(input.amenities).map((amenity, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    checked={input.amenities[amenity]} 
                    onChange={() => handleAmenityChange(amenity)} 
                    className="check"
                  />
                  <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>

            <button
              className="py-2 px-5 rounded-md my-5 text-white cursor-pointer bg-blue-700 hover:bg-blue-600 active:bg-blue-700 active:scale-95"
              type="submit"
            >
              Add Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadHotels;
