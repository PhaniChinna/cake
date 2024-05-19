import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index"; // Importing the named export buyCake

function CakeComponent(props) {
  return (
    <div>
      <h2>Num of Cakes {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
