import PokemonItem from "./PokemonItem";
const List = ({ list }) => {
  return list.map((pokemon) => <PokemonItem key={pokemon.id} pokemon={pokemon} />);
};

export default List;
