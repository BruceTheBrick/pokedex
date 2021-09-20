import "./List.css";
const PokemonItem = ({ pokemon }) => {
  return (
    <div key={pokemon.id} className={"list-item " + pokemon.types[0]}>
      <div className="header">
        <div className="name">{pokemon.name}</div>
        <div className="id">#{getId(pokemon.id)}</div>
      </div>
      {pokemon.types.map((type) => {
        return <div className="type">{type}</div>;
      })}
      <div className="sprite">
        <img src={pokemon.imgURL} alt={pokemon.name} title={pokemon.name}></img>
      </div>
    </div>
  );
};

function getId(id) {
  let res = "";
  res += id;
  while (res.length < 3) {
    res = "0" + res;
  }
  return res;
}

PokemonItem.defaultProps = {
  pokemon: {
    id: 0,
    name: "Missingno.",
    types: ["NaN"],
  },
};

export default PokemonItem;
