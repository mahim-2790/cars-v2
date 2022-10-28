import React from "react";
import { useSearchParams } from "react-router-dom";

const SlideBarComp = ({ ele, comp }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const carsFilter = searchParams.get("ca")?.split(",") || [];
  const citiesFilter = searchParams.get("ci")?.split(",") || [];
  const colorsFilter = searchParams.get("co")?.split(",") || [];
  const search = searchParams.get("se") || "";

  const handleChecked = (e) => {
    if (comp === "cars") {
      if (carsFilter.includes(e.target.value)) {
        const newArr = carsFilter.filter((car) => car !== e.target.value);
        setSearchParams({
          ca: [...newArr]?.join(","),
          ci: [...citiesFilter]?.join(","),
          co: [...colorsFilter]?.join(","),
          se: search,
        });
      } else {
        setSearchParams({
          ca: [...carsFilter, e.target.value]?.join(","),
          ci: [...citiesFilter]?.join(","),
          co: [...colorsFilter]?.join(","),
          se: search,
        });
      }
    } else if (comp === "city") {
      if (citiesFilter.includes(e.target.value)) {
        const newArr = citiesFilter.filter((city) => city !== e.target.value);
        setSearchParams({
          ca: [...carsFilter]?.join(","),
          ci: [...newArr]?.join(","),
          co: [...colorsFilter]?.join(","),
          se: search,
        });
      } else {
        setSearchParams({
          ca: [...carsFilter]?.join(","),
          ci: [...citiesFilter, e.target.value]?.join(","),
          co: [...colorsFilter]?.join(","),
          se: search,
        });
      }
    } else if (comp === "colors") {
      if (colorsFilter.includes(e.target.value)) {
        const newArr = colorsFilter.filter((color) => color !== e.target.value);
        setSearchParams({
          ca: [...carsFilter]?.join(","),
          ci: [...citiesFilter]?.join(","),
          co: [...newArr]?.join(","),
          se: search,
        });
      } else {
        setSearchParams({
          ca: [...carsFilter]?.join(","),
          ci: [...citiesFilter]?.join(","),
          co: [...colorsFilter, e.target.value]?.join(","),
          se: search,
        });
      }
    }
  };

  const isChecked = () => {
    if (comp === "cars") {
      return carsFilter.includes(ele);
    } else if (comp === "city") {
      return citiesFilter.includes(ele);
    } else if (comp === "colors") {
      return colorsFilter.includes(ele);
    }
  };

  return (
    <div className="mx-5 my-2">
      <label
        htmlFor={`${comp}-${ele}`}
        className={`cursor-pointer  hover:border border-slate-400 px-1 rounded block flex items-center `}
      >
        <input
          type="checkbox"
          name={`${comp}-${ele}`}
          id={`${comp}-${ele}`}
          className={`mr-2 ${
            !isChecked() && "hidden"
          } cursor-pointer hover:inline-block `}
          value={ele}
          onChange={(e) => {
            handleChecked(e);
          }}
          checked={isChecked()}
        />
        {ele}
        {/* {ele} */}
      </label>
    </div>
  );
};

export default SlideBarComp;
