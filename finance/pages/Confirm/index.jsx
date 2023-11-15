import React from "react";
import Logo from "@/component/Logo";
import Currency from "@/component/Currency";

const Confirm = () => {
  return (
    <div className="w-screen h-screen flex align-center flex-col m-12 gap-6">
      <div className="flex gap-1 justify-center items-center">
        <Logo />
        <h1 className="text-2xl font-bold">Geld</h1>
      </div>
      <div className="mx-auto">
        <ul className="steps w-[700px]">
          <li className="step step-primary">Currency</li>
          <li className="step step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <Currency />
    </div>
  );
};

export default Confirm;
