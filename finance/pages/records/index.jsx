import React from "react";
import Header from "@/component/Header";

const Records = () => {
  return (
    <div className="bg-slate-300 w-screen h-screen">
      <Header />
      <div className="flex gap-12">
        <div className="flex flex-col gap-6 p-6">
          <h1 className="text-xl font-semibold">Records</h1>
          <button class="btn btn-primary">+ Add</button>
          <input
            type="text"
            placeholder="Search"
            className="border border-black rounded-3xl px-3 bg-slate-300"
          />
          <h1 className="text-lg font-semibold">Types</h1>
          <div className="flex gap-3">
            <input type="radio" />
            <span>All</span>
          </div>
          <div className="flex gap-3">
            <input type="radio" />
            <span>Income</span>
          </div>
          <div className="flex gap-3">
            <input type="radio" />
            <span>Expense</span>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Categories</h1>
            <button className="btn btn-ghost text-slate-400">Clear</button>
          </div>
          <button className="btn btn-ghost flex justify-start">
            {" "}
            <img src="Minus.png" />
            Add Categories
          </button>
          <h1 className="text-lg font-semibold">Amount Range</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="1"
              className="w-16 rounded-md px-1"
            />
            <input
              type="text"
              placeholder="1000"
              className="w-16 rounded-md px-1"
            />
          </div>
          <ul class="steps">
            <li data-content="1" class="step step-primary"></li>
            <li data-content="2" class="step step-primary"></li>
          </ul>
        </div>
        <div className="flex flex-col gap-6">
          <div className="w-[1800px]">
            <div className="flex justify-between py-6">
              <div className="join">
                <button className="join-item btn">«</button>
                <button className="join-item btn">Last 30 Days</button>
                <button className="join-item btn">»</button>
              </div>
              <select className="select select-bordered w-full max-w-xs">
                <option>Newest first</option>
                <option>Oldest first</option>
              </select>
            </div>
            <div className="flex bg-white justify-between rounded-2xl items-center">
              <div className="flex gap-4 h-12 items-center p-6">
                <input type="checkbox" checked="checked" class="checkbox" />
                <h1>Select all</h1>
              </div>
              <h1 className="flex items-center p-6 text-slate-400">
                - 35,500₮
              </h1>
            </div>
            <h1 className="text-lg font-semibold p-4">Today</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-blue-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="House.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">
                      Lending & Renting
                    </h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-green-600">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-red-600">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold p-4">Yesterday</h1>
            <div className="flex flex-col gap-8">
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
              <div className="flex justify-between p-6 bg-white items-center rounded-2xl ">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox"
                  />
                  <div className="w-[40px] h-[40px] bg-red-600 flex items-center justify-center rounded-full">
                    <img
                      className="rounded-full w-[60%] h-[60%]"
                      src="ForkKnife.png"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-semibold">Food & Drinks</h1>{" "}
                    <h2 className="text-xs text-slate-400">3 hours ago</h2>{" "}
                  </div>
                </div>
                <h2 className="text-yellow-400">- 1,000₮</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Records;
