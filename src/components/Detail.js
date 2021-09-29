const Detail = ({ route, navigation }) => {
  const { pokemon } = route.params;
  return (
    <div className="content">
      <button onClick={() => navigation.goBack()}>Return</button>
      <div>{pokemon.name}</div>
      <div>{pokemon.id}</div>
    </div>
  );
};

export default Detail;
