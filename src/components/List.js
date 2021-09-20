import "./List.css";
import PokemonItem from "./PokemonItem";
const List = ({ list }) => {
  return (
    <div className="list">
      {list.map((pokemon) => (
        <PokemonItem key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default List;
