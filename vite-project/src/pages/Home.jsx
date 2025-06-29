import { assets } from "../quickStay-assets/assets/assets";
import { cities } from "../quickStay-assets/assets/assets";
import Destination from "./Desitination";
import Offers from "./Offers";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <div className="h-fit md:h-screen  pb-28 lg:pt-[230px] pt-[170px] px-5 sm:px-16 lg:px-20 bg-cover bg-center relative bg-[url('/heroImage.png')]">
        <p className="bg-blue-500 text-center text-sm md:text-start w-fit rounded-3xl py-1 px-5 opacity-80 text-white ">
          The Ultimate Hotel Experience
        </p>
        <h1 className="md:w-[500px] font-serif  text-3xl text-white my-5 text-center md:text-start w-full">
          Discover Your Perfect Gateway Destination
        </h1>
        <p className="text-white w-full text-sm text-center md:text-start md:w-[500px]">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your unforgettable and amazing hotels today.
        </p>
        <form action="/">
          <div className="mt-10 w-fit text-sm flex gap-3 md:gap-5 md:justify-center flex-wrap bg-white text-gray-800 p-1.5 md:p-4 rounded-md">
            <div>
              <div className="flex gap-3">
                <img src={assets.calenderIcon} alt="" />
                Destination
              </div>
              <input
                required
                name="destination"
                type="text"
                list="destination"
                placeholder="Type Here"
                className="outline-none rounded-sm border-2 py-1.5 pl-2 border-transparent bg-gray-300 w-full border-b-gray-400 mt-2"
              />
              <datalist id="destination">
                {cities.map((item, index)=>(
                  <option value={item} key={index}></option>
                ))}
              </datalist>
            </div>
            <div>
              <div className="flex gap-3">
                <img src={assets.calenderIcon} alt="" />
                Check in
              </div>
              <input
                required
                type="date"
                name="check in date"
                className="outline-none rounded-sm border-2 py-1.5 pl-2 border-transparent bg-gray-300 border-b-gray-400 w-full mt-2"
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
                className="outline-none rounded-sm border-2 py-1.5 pl-2 border-transparent bg-gray-300 border-b-gray-400 mt-2"
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
                className="outline-none rounded-sm border-2 border-transparent bg-gray-300 py-1.5 pl-2 w-[90px] border-b-gray-400 mt-2"
              />
            </div>
            <center>
              <div className="flex px-5 h-fit mt-[30px] py-2 rounded-md bg-black hover:bg-gray-700 text-white active:bg-black active:scale-95 cursor-pointer gap-3">
                <img src={assets.searchIcon} alt="" />
                <button type="submit" className="cursor-pointer">
                  Search
                </button>
              </div>
            </center>
          </div>
        </form>
      </div>

      {/* Destination section */}
      <div className="mt-10 mb-10">
        <h1 className="text-center text-xl md:text-2xl pb-5">Featured Destination</h1>
        <p className="pb-7 text-center text-sm">Discover our handpicked selection of exceptional properties around the world, <br /> offering Unparalleled luxury unforgettable experience</p>
        <Destination/>
      </div>

      {/* Offers */}
      <div className="mt-10 mb-10">
        <h1 className="text-center text-xl md:text-2xl pb-5">Exclusive Offers</h1>
        <p className="pb-7 text-center text-sm">Discover our handpicked selection of exceptional properties around the world, <br /> offering Unparalleled luxury unforgettable experience</p>
        <Offers/>
      </div>

      {/* Testimonials */}
       <div className="mt-10 mb-10">
        <h1 className="text-center text-xl md:text-2xl pb-5">What Our Guests Says</h1>
        <p className="pb-7 text-center text-sm">Discover our handpicked selection of exceptional properties around the world, <br /> offering Unparalleled luxury unforgettable experience</p>
       <Testimonials/>
      </div>

      {/* subscribe section */}
       <div className="flex justify-center my-20 sm:mx-5 lg:mx-[15%]  text-center py-10  sm:rounded-2xl bg-blue-950 text-white">
         <div className="">
          <h1 className="font-bold font-serif text-xl pb-2">
            Stay Inspired
          </h1>
          <p className="pb-4 text-sm">
            Join our newsletter and be the first to discover new destination, exclusive offers, and <br /> travel inspiration.
          </p>
          <div className="flex justify-center my-5">
            <input type="text" placeholder="Enter Your Email" className="bg-transparent backdrop-blur-2xl rounded-l-md py-2 border-2 border-gray-400 outline-none pl-2 text-white"/>
             <button className="bg-black text-white py-2 hover:bg-gray-700 cursor-pointer px-5 active:bg-black active:scale-95 rounded-r-md">Subscribe</button>
          </div>
          <p className="text-sm mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive updates
          </p>
         </div>
       </div>
      
    </>
  );
};

export default Home;
