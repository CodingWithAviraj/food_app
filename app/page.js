"use client"
import React from "react";
import Header from "@/components/Header";
import MenuPanel from "@/components/MenuPanel";
import CustomCarousel from "@/components/common/CustomCarousel";

const app = function () {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full m-auto max-w-[900px] ">
          <CustomCarousel />
          <MenuPanel />
      </div>
      <div className="bg-blue-200">
        <h1>Footer sections</h1>
        <p> This is footer</p>
      </div>
    </div>
  );
};

export default app;
