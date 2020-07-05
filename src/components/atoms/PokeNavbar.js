import React from "react";
import "./../../styles/PokeNavbar.scss";

const PokeNavbar = () => {
  return (
    <div className="NAV">
      <div className="NAV__title title_1">
        <div className="Logo__container">
          <img className="Logo" src="./utils/pokemon.svg" alt="poke_logo" />
        </div>
        <p>PokeAPP</p>
      </div>
      <div className="NAV__title">Title2</div>
      <div className="NAV__title">Title3</div>
      <div className="NAV__title">Title4</div>
      <div className="NAV__title">Title5</div>
    </div>
  );
};

export default PokeNavbar;
