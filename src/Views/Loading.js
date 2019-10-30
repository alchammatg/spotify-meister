import React from 'react';
import Loader from 'react-loader-spinner'

const green = "#1DB954";
const black = "#191414";

export default function Loading(props) {
  var divStyle = {
    backgroundColor: black,
    color: "white",
    position: "fixed",
    width: "100%",
    height: "100%",
  };
  
  const styles=['BallTriangle','ThreeDots','Bars','Circles', 'Puff', 'Rings']
  return(
    <div style={divStyle}>
      <Loader type={styles[2]} color={green} height={100} width={100} />
      {props.message? props.message : "Loading..."}
    </div>
  );
}