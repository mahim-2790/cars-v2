import React from "react";
import SlideBarComp from "./SlideBarComp";

const SideBarItem = ({ title, arr }) => {
  return (
    <div className="mb-6">
      <h4 className="font-bold">{title}</h4>
      {arr.map((ele, index) => (
        <SlideBarComp ele={ele} key={index} comp={title.toLowerCase()} />
      ))}
    </div>
  );
};

export default SideBarItem;
