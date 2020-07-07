import React from "react";
import "./../../styles/Seeker.scss";
const Seeker = () => {
  return (
    <div>
      <div className="Container_Title">
        <h1>Seeker of Pokemon :D!</h1>
      </div>
      <div className="Container_Input">
        <input className="InputSeeker" placeholder="Search your pokemon" />
      </div>
    </div>
  );
};

export default Seeker;
