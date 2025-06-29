import { Link } from "react-router-dom";
import { assets } from "../quickStay-assets/assets/assets";

const HotelCard = ({ room, index }) => {
  return (
    <>
      <Link
        to={"/room-details/" + room._id}
        onClick={() => scrollTo(0, 0)}
        key={room._id}
      >
        <div className="sm:w-[275px] sm:rounded-md hover:-translate-y-2 transition-all duration-300  shadow-2xl overflow-hidden shadow-gray-700 p-2 sm:p-0 ">
          <img src={room.images[0]} alt="" className="hover:scale-110 transition-all duration-300" />
          <div className="flex justify-between px-3 mt-3">
            <p className=" font-bold">{room.hotel.name}</p>
            <span className="flex">
              <img src={assets.starIconFilled} alt="" className="w-[15px]"/>
              <p> 4.5</p>
            </span>
          </div>
          <div className="flex text-sm w-fit overflow-hidden gap-1 px-2 mt-1 ">
            <img src={assets.locationIcon} alt="" />
            <p>{room.hotel.address}</p>
          </div>
          <div className="flex justify-between mt-2 px-3 pb-5">
            <p className=" ">${room.pricePerNight}/night</p>
            <button className="p-2 text-sm border-2 border-gray-600 hover:text-white hover:bg-gray-700 transition-all duration-300 cursor-pointer rounded-md">
              Book Now
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HotelCard;
