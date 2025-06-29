import { useParams } from "react-router-dom";
import {
  assets,
  roomsDummyData,
  roomCommonData,
  userDummyData,
} from "../quickStay-assets/assets/assets";

const RoomDetails = () => {
  const { id } = useParams();
  const rooms = roomsDummyData.find((item) => item._id == id);

  return (
    <>
      <div className="px-2 md:mt-32 mt-20 sm:px-5 md:px-28">
        <div className="flex sm:gap-3 gap-1">
          <h1 className="sm:text-3xl text-xl font-serif">{rooms.hotel.name}</h1>
          <p className="text-sm sm:mt-3 mt-2">({rooms.roomType})</p>
          <p className="rounded-md text-sm text-white bg-pink-700 h-fit py-2 px-3 ">
            25%OFF
          </p>
        </div>
        <div className="flex gap-1 my-3">
          <img src={assets.starIconFilled} alt="" />
          <img src={assets.starIconFilled} alt="" />
          <img src={assets.starIconFilled} alt="" />
          <img src={assets.starIconFilled} alt="" />
          <img src={assets.starIconOutlined} alt="" />
          <span className="pl-3 text-sm font-medium">200+ reviews</span>
        </div>
        <div className="flex w-fit overflow-hidden gap-1 mt-1 ">
          <img src={assets.locationIcon} alt="" />
          <p>{rooms.hotel.address}</p>
        </div>
        <div className=" mt-5 rounded-md gap-3 grid md:grid-cols-2">
          <div className="">
            <img src={rooms.images[0]} alt="" className="rounded-md h-full" />
          </div>
          <div className="">
            <div className=" rounded-md gap-3 mb-3 flex">
              <img
                src={rooms.images[1]}
                alt=""
                className="rounded-md w-[50%]"
              />
              <img
                src={rooms.images[0]}
                alt=""
                className="rounded-md  w-[50%]"
              />
            </div>
            <div className="gap-3 rounded-md flex">
              <img
                src={rooms.images[2]}
                alt=""
                className="rounded-md  w-[50%]"
              />
              <img
                src={rooms.images[3]}
                alt=""
                className="rounded-md  w-[50%]"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <h1 className="font-serif sm:text-3xl text-xl ">
            Experience Luxury Like Never Before
          </h1>
          <p className="font-medium text-xl">{rooms.pricePerNight}/night</p>
        </div>
        <div className="flex gap-5 mb-10">
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
        <div className="">
          <form action="/" className="flex justify-center md:justify-start">
            <div className="mt-10 w-fit flex gap-3 md:gap-5 md:justify-center flex-wrap bg-white text-gray-800 p-1.5 md:p-4 rounded-md">
              <div>
                <div className="flex gap-3">
                  <img src={assets.calenderIcon} alt="" />
                  Check in
                </div>
                <input
                  required
                  type="date"
                  name="check in date"
                  className="outline-none rounded-sm w-full sm:w-[200px] border-2 py-1.5 pl-2 border-transparent bg-gray-300 border-b-gray-400  mt-2"
                />
              </div>
              <div>
                <div className="flex gap-3">
                  <img src={assets.calenderIcon} alt="" />
                  Check out
                </div>
                <input
                  type="date"
                  required
                  name="check out date"
                  className="outline-none rounded-sm w-full sm:w-[200px] border-2 py-1.5 pl-2 border-transparent bg-gray-300 border-b-gray-400 mt-2"
                />
              </div>
              <div>
                <div className="flex gap-3">
                  <img src={assets.calenderIcon} alt="" />
                  Guest
                </div>
                <input
                  type="number"
                  placeholder="0"
                  required
                  name="guests"
                  className="outline-none rounded-sm w-full sm:w-[200px] border-2 border-transparent bg-gray-300 py-1.5 pl-2  border-b-gray-400 mt-2"
                />
              </div>
              <center>
                <div className="flex px-7 h-fit mt-[30px] py-2 rounded-md bg-blue-800 hover:bg-blue-600 text-white active:bg-blue-800 active:scale-95 cursor-pointer gap-3">
                  <button type="submit" className="cursor-pointer">
                    Check Availability
                  </button>
                </div>
              </center>
            </div>
          </form>
        </div>
        <div className="my-10">
          {roomCommonData.map((data, index) => (
            <div key={index} className="text-gray-600 mb-3">
              <div className="flex gap-2">
                <img src={data.icon} alt="" />
                <h1 className="font-medium">{data.title}</h1>
              </div>
              <p className="pl-8">{data.description}</p>
            </div>
          ))}
          <p className=" md:w-[800px] p-2 w-full sm:mt-12 text-gray-600 text-sm">
            Guests will be allocated to ground floor according to Availability.
            You get a two bed apartment has a true city feeling. The price quote
            is for two guests, at aguest slot please mark the number of guest to
            get the exact price of group.The price quote is for two guests, at a
            guest slot please mark the number of guest to get the exact price of
            group.{" "}
          </p>
          <div className="my-10 sm:flex  gap-4">
            <img
              src={userDummyData.image}
              alt=""
              className="rounded-[50%] w-[60px]"
            />
            <div className="flex gap-2 md:gap-10 text-gray-700 ">
              <div>
                <h1 className="text-xl">Aman Prajapati</h1>
                <div className="flex gap-2 sm:mt-1">
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconFilled} alt="" />
                  <img src={assets.starIconOutlined} alt="" />
                  <p className="text-sm">200+ Reviews</p>
                </div>
              </div >
              <p className="sm:mt-7 text-sm -mt-12">Response Rate = 100%</p>
              <p className="sm:mt-7 text-sm -mt-12">Response Time = 20min</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
