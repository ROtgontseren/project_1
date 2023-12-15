import React from "react";
import { useContext } from "react";
import Logo from "@/component/Logo";
import Link from "next/link";
import { useRouter } from "next/router";
import { userContext } from "@/context";

const Signup = () => {
  const router = useRouter();
  const { loading, signup, formUserData, changeFormUserData } =
    useContext(userContext);
  return (
    <div className="grid grid-cols-2 w-screen h-screen">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 items-center">
          <Link href={"../"}>
            <div className="flex gap-1 items-center">
              <Logo />
              <h1 className="text-2xl font-bold">Geld</h1>
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Create Geld account</h1>
          <h2 className="text-lg">Sign up below create your Wallet account</h2>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            value={formUserData.name}
            className="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <input
            type="text"
            name="email"
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            placeholder="Email"
            value={formUserData.email}
            className="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            value={formUserData.password}
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            className="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <input
            type="text"
            placeholder="Re-password"
            name="rePassword"
            value={formUserData.rePassword}
            onChange={(e) => {
              changeFormUserData(e.target.name, e.target.value);
            }}
            className="input input-bordered w-screen max-w-xs bg-slate-100"
          />
          <button
            className="btn btn-primary w-full rounded-3xl text-xl text-white"
            onClick={signup}
            disabled={loading}
          >
            Sign up
          </button>
          <div className="flex">
            <h2>Already have account ?</h2>
            <Link href={"../Login"}>
              <span className="mx-2 text-blue-600 cursor-pointer">Log in</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-blue-600"></div>
    </div>
  );
};

export default Signup;
