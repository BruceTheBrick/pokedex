import "./List.css";
import PokemonItem from "./ListItem";
const List = ({ list, navigation }) => {
  return (
    <div className="list">
      {list.map((pokemon) => (
        <>
          <PokemonItem navigation={navigation} key={pokemon.id} pokemon={pokemon} />
        </>
      ))}
    </div>
  );
};

export default List;
