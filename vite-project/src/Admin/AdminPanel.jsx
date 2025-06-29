import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./SideBar";
import UploadHotels from "./UploadHotels";
import HotelList from "./HotelList";

const AdminPanel = () => {
  const [component, setComponent] = useState("dashboard");

  return (
    <>
    <div className=" border-b-2 border-b-gray-400  ">
        <div className="flex pl-10 mb-3 w-full bg-white sticky z-10 top-0 text-2xl p-5 text-gray-900 md:text-3xl">
          <img src="/favicon.svg" alt="" className="w-10 invert" />
          <h1 className="font-bold pt-1.5">TajMahal</h1>
        </div>
        <div className="sm:flex">
          <div className="mt-0">
            <Sidebar component={component} setComponent={setComponent} />
          </div>
          <div className=" p-3">
            {component === "UploadHotels" ? (
              <UploadHotels />
            ) : component === "Hotels" ? (
              <HotelList />
            ) : (
              <Dashboard />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
