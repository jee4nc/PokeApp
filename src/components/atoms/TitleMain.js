import React from "react";
import "./../../styles/MainSecton.scss";

const TitleMain = () => {
  return (
    <div className="container">
      <div className="container__Titles">
        <h1>Here you can search wherever Pokemon and more :D!</h1>
      </div>
      <div className="container__Image">
        <img src="./utils/pikachu_wallpaper.png" alt="main_image" />
      </div>
    </div>
  );
};

export default TitleMain;
