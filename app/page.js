import React from "react";
import Header from "@/components/Header";
import Card from "@/components/Card";
import { FavouriteIndicator } from "@/components/utility/SvgIcons";

const app = function () {
  return (
    <div className="bg-white">
      <Header />
      <Card />
      <div>
        this is love
        <FavouriteIndicator></FavouriteIndicator>
      </div>
    </div>
  );
};

export default app;
