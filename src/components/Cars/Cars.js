import React from "react";
import { useSearchParams } from "react-router-dom";
import allCars from "../../assets/cars.json";
import CarsItem from "./CarsItem";
const Cars = () => {
  const [searchParams] = useSearchParams();
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

  return (
    <div className="col-span-4 md:col-span-3">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
        {allCars
          .filter((car) =>
            car.cars.some((ele) =>
              fCars.length > 0 && fCars[0] ? fCars.includes(ele) : true
            )
          )
          .filter((car) =>
            car.color.some((ele) =>
              colors.length > 0 && colors[0] ? colors.includes(ele) : true
            )
          )
          .filter((car) =>
            car.city.some((ele) =>
              cities.length > 0 && cities[0] ? cities.includes(ele) : true
            )
          )
          .filter((car) =>
            car.name.toLocaleLowerCase().includes(search?.toLocaleLowerCase())
          )
          .map((car, index) => (
            <CarsItem car={car} key={index} />
          ))}
      </div>
    </div>
  );
};

export default Cars;
