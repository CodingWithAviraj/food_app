"use client"
import React from "react";
import Header from "@/components/Header";
import MenuPanel from "@/components/MenuPanel";
import CustomCarousel from "@/components/CustomCarousel";
import SideNavi from "@/components/SideNavi";
import Footer from "@/components/Footer";

const app = function () {
  return (
    <div>
      <div className="bg-white">
        <Header />
        <div className="w-full m-auto max-w-[900px] ">
          <CustomCarousel />
          <MenuPanel />
        </div>
        <div className="bg-blue-200">
          <Footer />
        </div>
      </div>
      <SideNavi />
    </div>
  );
};

export default app;
