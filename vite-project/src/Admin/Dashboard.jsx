import {
  assets,
  dashboardDummyData,
  userBookingsDummyData,
} from "../quickStay-assets/assets/assets";

const Dashboard = () => {
  return (
    <div className="">
      <h1 className="text-xl md:text-2xl mb-3 font-serif text-gray-800">
        Dashboard
      </h1>
      <p className="py-2 text-sm text-gray-700 lg:w-[700px]">
        Monitor your room listings, track bookings, and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations.
      </p>
      <div className="flex text-sm gap-2 md:gap-10 md:my-7 my-3">
        <div className="   ">
          <div className="flex items-center  md:gap-4">
            <img src={assets.totalBookingIcon} alt="Total Bookings" className="w-10 h-10" />
            <p className="text-blue-600  font-medium">Total Bookings</p>
          </div>
          <p className="text-gray-700 font-semibold mt-3 text-center">
            {dashboardDummyData.totalBookings}
          </p>
        </div>

        <div className="flex-1  ">
          <div className="flex items-center md:gap-4">
            <img src={assets.totalRevenueIcon} alt="Total Revenue" className="w-10 h-10" />
            <p className="text-blue-600  font-medium">Total Revenue</p>
          </div>
          <p className="text-gray-700  font-semibold mt-3 text-center">
            ${dashboardDummyData.totalRevenue}
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <h1 className="text-gray-700 font-medium mb-5">Recent Bookings</h1>
        <div className="overflow-x-auto">
          <table className="min-w-[700px] w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-3 border border-gray-300">User Name</th>
                <th className="px-4 py-3 border border-gray-300">Room Name</th>
                <th className="px-4 py-3 border border-gray-300">Total Amount</th>
                <th className="px-4 py-3 border border-gray-300">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {userBookingsDummyData.map((item, index) => (
                <tr key={index} className="text-center text-sm even:bg-gray-50">
                  <td className="px-4 py-3 border border-gray-300">{item.hotel.owner.username}</td>
                  <td className="px-4 py-3 border border-gray-300">{item.room.roomType}</td>
                  <td className="px-4 py-3 border border-gray-300">${item.room.pricePerNight}</td>
                  <td
                    className={`px-4 py-3 border border-gray-300 font-medium ${
                      item.isPaid ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
