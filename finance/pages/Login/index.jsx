import React from "react";
import Logo from "@/component/Logo";

const index = () => {
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex gap-1 items-center">
            <Logo />
            <h1 className="text-2xl font-bold">Geld</h1>
          </div>
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <h2 className="text-lg">Welcome Back, Please enter your details</h2>
          <input
            type="text"
            placeholder="Email"
            class="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <input
            type="text"
            placeholder="Password"
            class="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <button class="btn btn-primary w-full rounded-3xl text-xl text-white">
            Log in
          </button>
          <div className="flex">
            <h2>Don’t have account ?</h2>
            <span className="mx-2 text-blue-600 cursor-pointer">Sign Up</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};

export default index;
