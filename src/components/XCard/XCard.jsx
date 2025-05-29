import React from "react";
import "./XCard.css";

const XCard = () => {
  return (
    <div className="flex justify-evenly align-middle mt-5">
      <div className="shell relative perspective-midrange transform-3d">
        <div className="card flex bg-amber-300 h-64">
          <h1 className="text-7xl">
            <span className="word bg-black text-amber-300 px-2.5 ml-4 inline-flex">
              YQY
            </span>
            MONs
          </h1>
        </div>
      </div>
    </div>
  );
};

export default XCard;
