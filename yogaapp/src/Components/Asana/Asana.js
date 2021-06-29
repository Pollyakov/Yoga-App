import React from "react";
import { Link } from "react-router-dom";
import "./asana.css";

const Asana = (props) => {

  return (
    <div className="asana_container">
      <img className="asana-img" src={props.img_src}  />
      <div className="info">
      <div className="asana-title">{props.eng_name}</div>
        <div className="sanskrit">{props.name}</div>
        <div className="descr level">{props.difficulty}</div>
        </div>
    
      <Link to={`/asanas/${props.eng_name}`}>
        <button className="descr" >
          See More</button>
      </Link>
      
     <label htmlFor="asana" className= 'secondary-label'>Add
     <input type="checkbox"
      id="asana"
      name="asanaToChoose"
      value={props.id}
       onChange={(e)=>console.log(e.target.value)}
      // onChange={(e)=>props.addFavorite()}
      ></input>
     </label>
    <br/>
  
    </div>
  );
};

export default Asana;
