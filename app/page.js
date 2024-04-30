import React from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
// import MenuCategories from "@/components/MenuCategories";
// import CartSummary from "@/components/CartSummary";
import MenuPanel from "@/components/MenuPanel";

const app = function () {
  return (
    <div className="bg-white">
      <Header />
      <Card />
      <MenuPanel />
    </div>
  );
};

export default app;
