import "./List.css";
import PokemonItem from "./ListItem";
const List = ({ list, navigation }) => {
  return (
    <div className="list">
      {list.map((pokemon) => (
        <>
          <PokemonItem key={pokemon.id} pokemon={pokemon} />
          <button
            onClick={() => {
              navigation.navigate("Details", { pokemon });
            }}
          />
        </>
      ))}
    </div>
  );
};

export default List;
