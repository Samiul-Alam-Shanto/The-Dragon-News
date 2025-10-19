import React from "react";
import swimImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playImg from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-4 my-5">
      <h2 className="font-bold mb-3">Q-Zone</h2>
      <div>
        <img src={swimImg} alt="" />
        <img src={classImg} alt="" />
        <img src={playImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
