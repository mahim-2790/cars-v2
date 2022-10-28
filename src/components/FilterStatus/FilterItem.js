import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

const FilterItem = ({ item }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const fCars = searchParams.get("ca")?.split(",") || [];
  const cities = searchParams.get("ci")?.split(",") || [];
  const colors = searchParams.get("co")?.split(",") || [];
  const search = searchParams.get("se") || "";

  if (fCars.includes("")) {
    fCars.shift();
  }
  if (cities.includes("")) {
    cities.shift();
  }
  if (colors.includes("")) {
    colors.shift();
  }

  const handleClick = (e) => {
    let newCar = [...fCars];
    let newColor = [...colors];
    let newCity = [...cities];
    if (item.attribute === "cars") {
      newCar = fCars.filter((car) => car !== item.value);
    } else if (item.attribute === "cities") {
      console.log("in ci");
      newCity = cities.filter((city) => city !== item.value);
    } else if (item.attribute === "colors") {
      console.log("in co");
      newColor = colors.filter((color) => color !== item.value);
    }
    console.log({ newCar }, { newColor }, { newCity });
    setSearchParams({
      ca: [...newCar].join(","),
      co: [...newColor].join(","),
      ci: [...newCity].join(","),
      se: search,
    });
  };
  return (
    <div className="px-2 cursor-pointer mx-2 bg-slate-200 rounded-full relative">
      <AiFillCloseCircle
        className="absolute -top-2 -right-1"
        color="#eb1d36"
        onClick={handleClick}
      />
      {item.value}
    </div>
  );
};

export default FilterItem;
