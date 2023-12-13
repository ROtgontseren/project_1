import React from "react";
import { useContext,useEffect } from "react";
import { useRouter } from "next/router";
import { userContext } from "@/context";

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(userContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }
  return (
    <div className="w-screen h-screen bg-slate-300">
      <h1>hello</h1>
    </div>
  );
}
