import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Header = () => {
  const newLocal = <p className="py-4">Click the button below to close</p>;
  return (
    <header className="bg-white px-[120px] py-6 flex justify-between">
      <div className="flex items-center gap-4">
        <Logo />
        <Link href={"./"}>
          <h1 className="text-xl font-bold">Dashboard</h1>
        </Link>
        <Link href={"./records"}>
          <h1 className="text-xl">Records</h1>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <button className="btn btn-primary rounded-3xl">+Records</button>
        <img className="w-8 h-8 rounded-full bg-black" src="Vector.png" />
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          welcome
        </button>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="flex justify-evenly">
              <div className="flex items-center">
                <img
                  className="w-32 h-32 rounded-full bg-black"
                  src="Vector.png"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-24">
                  <h1>Name</h1>
                  <input
                    className="border border-black px-2 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-[100px]">
                  <h1>Email</h1>
                  <input
                    className="border border-black px-2 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <h1>Current Password</h1>
                  <input
                    className="border border-black px-2 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-8">
                  <h1>New Password</h1>
                  <input
                    className="border border-black px-2 rounded-2xl"
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-11">
                  <h1>Re Password</h1>
                  <input
                    className="border border-black px-2 rounded-2xl"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-col justify-center">
                <button className="btn btn-success">Save</button>
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </header>
  );
};

export default Header;
