import logo from "./logo.svg";
import "./App.css";

import List from "./List.js";

const pokies = [
  {
    name: "Squirtle",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
  {
    name: "Wartortle",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
  },
  {
    name: "Blastoise",
    imgURL: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
  },
];

function App() {
  return <List list={pokies} />;
}

export default App;
