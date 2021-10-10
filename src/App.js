import "./App.css";

import List from "./components/List.js";

const pokies = [
  {
    id: 1,
    name: "Testmon",
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
];

function App() {
  return <List list={pokies} />;
}

export default App;
