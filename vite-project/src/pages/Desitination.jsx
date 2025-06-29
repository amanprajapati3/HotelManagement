import { NavLink } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import { roomsDummyData } from "../quickStay-assets/assets/assets";

const Destination = () => {
  return (
    <>
      <div className="flex justify-center-safe flex-wrap sm:gap-5 gap-1 sm:px-5 lg:px-20">
        {roomsDummyData.map((room, index) => {
          return <HotelCard key={room._id} room={room} index={index} />;
        })}
      </div>
      <center>
        <button className="px-5 py-2 text-sm cursor-pointer hover:bg-teal-500 bg-teal-700 text-white rounded-md my-10">
          <NavLink to={"/hotels"}> View All Destination</NavLink>
        </button>
      </center>
    </>
  );
};

export default Destination;
