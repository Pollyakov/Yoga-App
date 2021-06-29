import React from "react";
import { useHistory, useParams} from "react-router-dom";
import './asanaFullInfo.css';

//add rendering the icons of asanas

const AsanaFullInfo = (props) => {
  const history = useHistory()
  const { eng_name } = useParams()
  
  return ( <div className= "asana-info-container">
    
       <h1 className="title">
        {eng_name}
      </h1>
    
    <div className="container">
      <img className="asana-img" src={props.img_src} alt="asana" />
      <div className="info">
      <div className="title">{props.eng_name}</div>
        <div className="title sanskrit">{props.name}</div>
        <div className="descr level">{props.difficulty}</div>
        <div className="descr">{props.benefits}</div>
        </div>
        <button onClick={()=>history.goBack()}>Back</button>
        <button>Add to the Sequence</button>
      
     
    </div>
    </div>
  )
}

export default AsanaFullInfo
