import React from "react";
//importar react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importacion de componentes
import TitleMain from "./components/atoms/TitleMain";
import PokeNavbar from "./components/atoms/PokeNavbar";
import Seeker from "./components/atoms/Seeker"

function App() {
  return (
    <>
      <Router>
        <PokeNavbar />
        <Switch>
          <Route extact path="/pokedex">
            <Seeker/>
          </Route>
          <Route extact path="/types">
            <h1>Hola soy pagina de tipos</h1>
          </Route>
          <Route extact path="/regions">
            <h1>Hola soy pagina de regiones</h1>
          </Route>
          <Route extact path="/objects">
            <h1>Hola soy pagina de objetos</h1>
          </Route>
          <Route extact path="/">
            <TitleMain />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
