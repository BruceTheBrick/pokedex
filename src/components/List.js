import "./List.css";

import PokemonItem from "./ListItem";
const List = ({ list, navigation }) => {
  return (
    <div className="list">
      {list.map((pokemon, index) => (
        <>
          <PokemonItem navigation={navigation} key={index} pokemon={pokemon} />
        </>
      ))}
    </div>
  );
};

export default List;
