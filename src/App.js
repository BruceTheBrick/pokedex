import "./App.css";

import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/PokemonDetail";

const PokeDexAPI = require("pokeapi-js-wrapper");

const pokedexOptions = {
  protocol: "https",
  versionPath: "/api/v2/",
  // cache: true,
  timeout: 5 * 1000,
  // cacheImages: true,
  limit: 10,
};
const pokedex = new PokeDexAPI.Pokedex(pokedexOptions);

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={() => {
          return <Homepage pokedex={pokedex} />;
        }}
        exact
      />
      <Route path="/PokemonDetails" component={Detail} />
    </Switch>
  );
}

export default App;
