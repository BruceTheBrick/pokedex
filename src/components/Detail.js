import React from "react";
import "./Detail.css";
class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSpinning: true };
  }

  updateSpin = () => {
    this.setState({
      isSpinning: !this.state.isSpinning,
    });
    console.log(this.state.isSpinning);
  };

  render() {
    const { pokemon } = this.props.route.params;
    return (
      <div className="content">
        <button onClick={() => this.props.navigation.goBack()}>Return</button>
        <div className="pokemon">
          <div className={"pokemon-img " + (this.state.isSpinning ? "spin-3d" : "")}>
            <img src={pokemon.imgURL} alt={"Sprite of " + pokemon} />
            <div className="sprite-shadow"></div>
          </div>
        </div>
        <div>
          <input type="checkbox" name="isSpinning" id="isSpinning" onClick={this.updateSpin} />
        </div>
      </div>
    );
  }
}

export default Detail;
