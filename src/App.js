import "./App.css";

import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/PokemonDetail";

const PokeDexAPI = require("pokeapi-js-wrapper");

const pokedexOptions = {
  protocol: "https",
  versionPath: "/api/v2/",
  cache: true,
  timeout: 5 * 1000,
  cacheImages: true,
  limit: 10,
};
const pokedex = new PokeDexAPI.Pokedex(pokedexOptions);

const pokies = [
  {
    id: 1,
    name: "Bulbasaur",
    types: ["grass", "poison"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 2,
    name: "Ivysaur",
    types: ["grass", "poison"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
  {
    id: 3,
    name: "Venasaur",
    types: ["grass", "poison"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },
  {
    id: 4,
    name: "Charmander",
    types: ["fire"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 5,
    name: "Charmeleon",
    types: ["fire"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
  {
    id: 6,
    name: "Charizard",
    types: ["fire", "flying"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
  },
  {
    id: 7,
    name: "Squirtle",
    types: ["water"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    id: 8,
    name: "Wartortle",
    types: ["water"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    id: 9,
    name: "Blastoise",
    types: ["water"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
  {
    id: 321,
    name: "Wailord",
    types: ["water"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
  },
  {
    id: 890,
    name: "Eternatus",
    types: ["poison", "dragon"],
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
  },
];

function App() {
  return (
    <Switch>
      <Route
        path="/"
        component={() => {
          // return <Homepage pokedex={pokedex} list={pokies} />;
          return <Homepage pokedex={pokedex} />;
        }}
        exact
      />

      <Route path="/PokemonDetails" component={Detail} />
    </Switch>
  );
}

export default App;
