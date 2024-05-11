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
      <ImageSwiper />
      <Card />
      <MenuPanel />
      <div>
        <Card></Card>
      </div>
    </div>
  );
};

export default app;
