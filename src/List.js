import "./List.css";
function List({ list }) {
  return list.map((pokemon) => (
    <div key={pokemon.name} className="list-item">
      <div className="title">{pokemon.name}</div>
      <div className="sprite">
        <img src={pokemon.imgURL} alt={pokemon.name} title={pokemon.name}></img>
      </div>
    </div>
  ));
}

export default List;
