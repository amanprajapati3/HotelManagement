import { assets, userBookingsDummyData } from "../quickStay-assets/assets/assets";

const Bookings = () => {
  return (
    <div className="md:mt-32 mt-20 sm:px-5 px-3 lg:px-20 mb-10">
      <h1 className="text-xl md:text-2xl pl-4 mb-3 font-serif">My Bookings</h1>
      <p className="py-2 pl-4 text-sm text-gray-700 max-w-2xl">
        Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.
      </p>

      <div className="w-full mt-10 mb-20 border-t-2 border-t-gray-500">
        {userBookingsDummyData.map((rooms, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:p-4 border-b-2 border-b-gray-500 py-6"
          >
            {/* Left Section: Image and Hotel Info */}
            <div className="flex flex-col md:flex-row gap-5 text-gray-800">
              <img
                src={rooms.room.images[0]}
                alt=""
                className="w-full sm:w-[300px] md:w-[250px] lg:w-[300px] rounded-md object-cover"
              />
              <div className="mt-3 md:mt-0">
                <h1 className="text-2xl font-serif">
                  {rooms.hotel.name}{" "}
                  <span className="text-sm">({rooms.room.roomType})</span>
                </h1>
                <div className="flex items-start gap-1 pt-2 text-sm">
                  <img src={assets.locationIcon} alt="" className="mt-1 w-4 h-4" />
                  <p>{rooms.hotel.address}, 23 Colony</p>
                </div>
                <div className="flex items-start gap-1 pt-2 text-sm">
                  <img src={assets.guestsIcon} alt="" className="mt-1 w-4 h-4" />
                  <p>Guests: {rooms.guests}</p>
                </div>
                <p className="pt-2 font-medium text-base">Total: ${rooms.room.pricePerNight}</p>
              </div>
            </div>

            {/* Middle Section: Check-in/Check-out Dates */}
            <div className="flex justify-center gap-8 sm:gap-12 mt-4 lg:mt-0">
              <div className="text-center lg:text-left">
                <p className="font-semibold">Check-in:</p>
                <p className="text-gray-700 text-sm">{new Date(rooms.checkInDate).toDateString()}</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-semibold">Check-out:</p>
                <p className="text-gray-700 text-sm">{new Date(rooms.checkOutDate).toDateString()}</p>
              </div>
            </div>

            {/* Right Section: Payment Status */}
            <div className="flex flex-col items-center justify-center mt-4 lg:mt-0">
              <p className={`font-semibold ${rooms.isPaid ? 'text-green-700' : 'text-red-700'}`}>
                {rooms.isPaid ? "Paid" : "Unpaid"}
              </p>
              {!rooms.isPaid && (
                <button
                  className="rounded-md px-4 py-2 mt-3 border-2 border-gray-600 hover:border-transparent hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Pay Now
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
