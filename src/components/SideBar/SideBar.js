import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import cars from "../../assets/cars.json";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  let carsArray = [];
  let cityArray = [];
  let colorsArray = [];

  const buildingFilter = () => {
    cars.forEach((car) => {
      carsArray = [...new Set([...carsArray, ...car.cars])];
      cityArray = [...new Set([...cityArray, ...car.city])];
      colorsArray = [...new Set([...colorsArray, ...car.color])];
    });
  };

  buildingFilter();

  return (
    <div className="md:col-span-1 col-span-4 text-left">
      <button
        className="border border-slate-400 p-2 rounded md:hidden"
        onClick={() => setShowSidebar((prevState) => !prevState)}
      >
        Show Filters <BsFilter size={24} className="inline-block" />
      </button>
      <div className={`${!showSidebar && "hidden"} md:inline-block`}>
        <SideBarItem title={"CARS"} arr={carsArray} />
        <SideBarItem title={"CITY"} arr={cityArray} />
        <SideBarItem title={"COLORS"} arr={colorsArray} />
      </div>
    </div>
  );
};

export default SideBar;
