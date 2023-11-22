import React from "react";
import PieChart from "../Chart/PieChart";

const Five = () => {
  return (
    <div className="w-2/5 h-[200px] bg-white rounded-2xl flex">
      <PieChart />
      <div className="flex flex-col items-center p-8 px-24">
        <div className="flex gap-24">
          <div>
            <h1>Bills</h1>
            <h1>Food</h1>
            <h1>Shopping</h1>
            <h1>Insurance</h1>
            <h1>Clothing</h1>
          </div>
          <div>
            <h2>5’000’000₮</h2>
            <h2>5’000’000₮</h2>
            <h2>5’000’000₮</h2>
            <h2>5’000’000₮</h2>
            <h2>5’000’000₮</h2>
          </div>
          <div>
            <h2>15.50%</h2>
            <h2>15.50%</h2>
            <h2>15.50%</h2>
            <h2>15.50%</h2>
            <h2>15.50%</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Five;
