import "./Detail.css";
const Detail = ({ route, navigation }) => {
  const { pokemon } = route.params;
  return (
    <div className="content">
      <button onClick={() => navigation.goBack()}>Return</button>
      <div className="pokemon">
        <div className="pokemon-img">
          <img src={pokemon.imgURL} alt="" />
          <div className="sprite-shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
