import { Link, NavLink } from "react-router-dom";
import { assets, exclusiveOffers } from "../quickStay-assets/assets/assets";
import { FaArrowRight } from "react-icons/fa6";

const Offers = () => {
  return (
    <>
      <div className="flex justify-center-safe flex-wrap group sm:gap-5 gap-5 sm:px-5 lg:px-20">
        {exclusiveOffers.map((offers, index) => {
          return (
            <Link to={"/offers" + offers._id}>
              <div
                key={index}
                className="sm:w-[350px] sm:rounded-md hover:-translate-y-2 transition-all duration-300  shadow-2xl overflow-hidden shadow-gray-700 sm:p-0 "
                style={{
                  backgroundImage: `url(${offers.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <p className="ml-5 mt-2 py-1 px-2 text-sm rounded-2xl bg-white w-fit">
                  {offers.priceOff}%OFF
                </p>
                <h1 className="ml-5 mt-8 text-xl text-white font-serif">
                  {offers.title}
                </h1>
                <p className="py-2 text-sm text-white pl-5">
                  Enjoy a complimentary right and daily breakfast
                </p>
                <p className="text-white pl-5 mt-3">
                  Expires {offers.expiryDate}
                </p>
                <div className="text-white cursor-pointer ml-5 mt-8 mb-7 flex gap-2">
                  <button className="cursor-pointer">
                    View Offers
                  </button>
                  <span className="mt-1.5">
                    <FaArrowRight/>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="flex gap-1 my-10 justify-center  rounded-md px-5 py-2">
        <NavLink to={"/offers"}>
        <button className="text-sm cursor-pointer text-gray-800 hover:text-gray-950">
          View All Offers
        </button>
        </NavLink>
        <img src={assets.arrowIcon} alt="" className="mt-1 ml-1" />
      </div>
    </>
  );
};

export default Offers;
