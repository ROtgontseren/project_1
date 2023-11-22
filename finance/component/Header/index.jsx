import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
