import React from "react";

const CarsItem = ({ car }) => {
  const { name, cars, color, city } = car;
  return (
    <div className="border border-slate-400 md:p-5 p-2 cursor-pointer hover:bg-amber-400 hover:text-white">
      <h4 className="font-medium">{name}</h4>
      <p>{`Cars: ${cars.join(",")}`}</p>
      <p>{`Colors: ${color.join(",")}`}</p>
      <p>{`Cities: ${city.join(",")}`}</p>
    </div>
  );
};

export default CarsItem;
