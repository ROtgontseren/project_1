import React from "react";

const Currency = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="rounded-full h-6 w-6">
            <img className="w-full h-full bg-blue-600" src="Money.png" />
          </div>
          <h1>Select base currency</h1>
          <select className="select select-secondary w-full max-w-xs">
            <option>MNT - Mongolian tugrik</option>
            <option>USD - American dollar</option>
            <option>WON - Korean won</option>
          </select>
          <h2>
            Your base currency should be the one you use most often. All <br />{" "}
            transaction in other currencies will be calculated based on this one
          </h2>
          <button className="btn btn-primary w-full rounded-3xl text-xl text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currency;
