import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterItem from "./FilterItem";

const FilterStatus = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const filters = useSelector((state) => state.filters);
  // const { cars, cities, colors } = filters;
  const [allArr, setAllArr] = useState([]);
  // const dispatch = useDispatch();

  const createArr = (attribute, givenArr) => {
    let temp = [];
    givenArr.forEach((ele) => {
      // console.log(ele);
      const obj = {
        attribute,
        value: ele,
      };
      // console.log({ obj });
      temp.push(obj);
    });
    return temp;
  };

  useEffect(() => {
    const fCars = searchParams.get("ca")?.split(",") || [];
    const cities = searchParams.get("ci")?.split(",") || [];
    const colors = searchParams.get("co")?.split(",") || [];

    if (fCars.includes("")) {
      fCars.shift();
    }
    if (cities.includes("")) {
      cities.shift();
    }
    if (colors.includes("")) {
      colors.shift();
    }
    const carsArr = createArr("cars", fCars);
    const citiesArr = createArr("cities", cities);
    const colorsArr = createArr("colors", colors);
    const filtersArr = carsArr.concat(citiesArr, colorsArr);
    setAllArr(filtersArr);
  }, [searchParams]);

  const handleReset = (e) => {
    setSearchParams({});
  };

  return (
    <div className="m-5 flex flex-wrap ">
      {allArr.map((item, index) => (
        <FilterItem item={item} key={index} />
      ))}
      {allArr.length > 0 && (
        <button
          className="px-2 mx-2 bg-slate-200 rounded-full"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default FilterStatus;
