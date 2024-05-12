"use client"
import React from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
// import MenuCategories from "@/components/MenuCategories";
// import CartSummary from "@/components/CartSummary";
import MenuPanel from "@/components/MenuPanel";
import ImageSwiper from "@/components/ImageSwiper";
// import { Virtuoso } from 'react-virtuoso'
const app = function () {
  return (
    <div className="bg-white">
      <Header />
      <div className="w-full m-auto max-w-[900px] ">
          <ImageSwiper />
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
