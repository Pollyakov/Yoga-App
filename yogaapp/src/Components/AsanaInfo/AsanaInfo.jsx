import React from "react";
import { Link } from "react-router-dom";
// import "./asana.css";

const AsanaInfo = (props) => {
 
  const asanaId = Number(props.match.params.id);
  console.log(asanaId, typeof asanaId);
  return (
    
    <div className="container">
      <img className="asana-img" src={props.img_src} alt="asana image" />
      <div className="info">
      <div className="title">{props.eng_name}</div>
        <div className="title sanskrit">{props.name}</div>
        <div className="descr level">{props.difficulty}</div>
        <div className="descr">{props.benefits}</div>
        </div>
    
      <Link to={`/asanas/`}>
        <button className="descr" >
          Back</button>
      </Link>
      

     <label for="asana" className= 'secondary-label'>Add
     <input type="checkbox" id="asana" name="asanaToChoose" value={props.id}></input>
     </label>
    <br/>
  
    </div>
  );
};

export default AsanaInfo;
