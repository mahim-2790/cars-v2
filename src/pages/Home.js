import React from "react";
import Cars from "../components/Cars/Cars";
import FilterStatus from "../components/FilterStatus/FilterStatus";
import Search from "../components/Search/Search";
import SideBar from "../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className="">
      <Search />
      <FilterStatus />
      <div className="grid grid-cols-4 gap-3 md:p-10 p-5 bg-slate-200 md:mt-10">
        <SideBar />
        <Cars />
      </div>
    </div>
  );
};

export default Home;
