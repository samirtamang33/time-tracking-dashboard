import React from "react";

const Card = () => {
  return (
    <div className="">
      <div className="bg-navy-200">Brif case</div>
      <div className=" flex bg-navy-900 p-400 max-w-[255px] h-[199px] rounded[15px]">
        <div>Work</div>
        <div className="text-white">
          <h1>32hrs</h1>
        </div>
        <div className="text-navy-200">
          <h3>Last Week - 36hrs</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
