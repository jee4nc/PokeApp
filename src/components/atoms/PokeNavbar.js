import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/PokeNavbar.scss";

const PokeNavbar = () => {
  return (
    <div className="NAV">
      <Link to="/" className="linked">
        <div className="NAV__title title_1">
          <div className="Logo__container">
            <img className="Logo" src="./utils/pokemon.svg" alt="poke_logo" />
          </div>
          <p>PokeAPP</p>
        </div>
      </Link>

      <div className="NAV__title">
        <Link to="/pokedex" className="linked">
          Pokedex
        </Link>
      </div>

      <div className="NAV__title">
        <Link to="/types" className="linked">
          Tipos de Pokemon
        </Link>
      </div>

      <div className="NAV__title">
        <Link to="/regions" className="linked">
          Regiones
        </Link>
      </div>

      <div className="NAV__title">
        <Link to="/objects" className="linked">
          Objetos
        </Link>
      </div>
    </div>
  );
};

export default PokeNavbar;
