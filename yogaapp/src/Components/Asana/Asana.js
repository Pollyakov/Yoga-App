import React from "react";
import "./asana.css";

const Asana = (props) => {
  return (
    <div className="container">
        
      <img className="asana-img" src={props.img_src} alt="asana image" />
      <div className="info">
      <div className="title">{props.eng_name}</div>
        <div className="title sanskrit">{props.name}</div>
        <div className="descr level">{props.difficulty}</div>
        <div className="descr">{props.benefits}</div>
      </div>
    </div>
  );
};

export default Asana;
