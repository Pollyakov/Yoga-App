import React, { useEffect, useState } from "react";

import "./gallery.css";
import Asana from "../Asana/Asana";
import AsanaInfo from "../AsanaInfo/AsanaInfo";
import poses from "../poses.js";

const Gallery = (props) => {
  
  const renderedAsanot = props.dataFromState.map((asana) => {
    console.log(asana.id);
    return (
      <Asana
        key={asana.id}
        img_src={asana.img_url}
        name={asana.sanskrit_name}
        eng_name={asana.pose_name}
        category={asana.category}
        description={asana.description}
        difficulty={asana.difficulty}
        benefits={asana.benefits}
        id={asana.id}
        
        
      />
    );
  });

  return <div >
     <h1>The Asanas matched your search: </h1>
     <br/>
     <div className="gallery">
    {renderedAsanot}
    </div>
    </div>
};

export default Gallery;
