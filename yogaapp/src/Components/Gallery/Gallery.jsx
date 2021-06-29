import React, { useState } from "react";
import "./gallery.css";
import Asana from "../Asana/Asana";
import poses from "../poses.js";

const Gallery = (props) => {
//props = data from DB
  const [favoriteAsanas, setFavoriteAsanas] = useState([])
  const addFavoriteAsana = (str)=> setFavoriteAsanas([...favoriteAsanas, props.find(asana=>asana.id==str)])
  console.log(favoriteAsanas);

  //making an array of Asana Components from App.js props (fetched data), by passing them 
  //to Asana component
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
        addFavoriteAsana={addFavoriteAsana}
      />
    );
  });

  return <div className="wrapper" >
     <div className="gallery">
     <h1 className="title">The Asanas matched your search:</h1>
    {renderedAsanot}
    </div>
    <div className="placeholder">
      {favoriteAsanas}
    </div>

    </div>
};

export default Gallery;
