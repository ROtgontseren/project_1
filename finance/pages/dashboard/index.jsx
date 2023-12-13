import React from 'react';
import Header from "@/component/Header";
import One from "@/component/Folder/one";
import Three from "@/component/Folder/Three";
import Two from "@/component/Folder/Two";
import Five from "@/component/Folder/Five";
import Four from "@/component/Folder/Four";
import Six from "@/component/Folder/six";

const Dashboard = () => {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <Header />
      <div className="flex flex-col px-[120px]">
        <div className="flex justify-evenly py-6 w-full px-3">
          <One />
          <Two />
          <Three />
        </div>
        <div className="flex justify-evenly">
          <Four />
          <Five />
        </div>
        <div className="flex justify-center">
          <Six />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
