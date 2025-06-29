import { Link, Links } from "react-router-dom";
import { assets, testimonials } from "../quickStay-assets/assets/assets";

const Testimonials = () => {
  return (
    <>
      <div className="flex justify-center-safe flex-wrap group sm:gap-5 gap-5 sm:px-5 lg:px-20">
        {testimonials.map((review, index) => (
          <div
            className="sm:w-[350px] sm:rounded-md hover:-translate-y-2 transition-all duration-300  shadow-2xl overflow-hidden shadow-gray-700 bg-white text-gray-800 sm:p-0 "
            key={index}
          >
            <div className="flex gap-2">
              <img
                src={review.image}
                alt=""
                className="rounded-[50%] w-[36px] ml-6 mt-3"
              />
              <p className="font-serif mt-4.5">{review.name}</p>
            </div>
            <div className="flex gap-1 ml-7 my-3">
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconFilled} alt="" />
              <img src={assets.starIconOutlined} alt="" />
            </div>
            <p className="pl-7 pr-3 pb-5 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis nostrum commodi magni, <span className="hidden sm:block"> temporibus voluptatibus vero fuga sed ex atque reprehenderit quas, in culpa accusantium omnis cupiditate architecto vel alias!</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
