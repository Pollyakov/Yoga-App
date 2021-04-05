import React, { useEffect, useState } from "react";
import axios from "axios";
import default_img from "./default_img.png";
import "./gallery.css";
import Asana from "../Asana/Asana";
import poses from "../poses.js";

const Gallery = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setIsLoading(true);
      try {
        const data = await axios.get(
          `https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json`
        );
        const icons = data.data;
        //array without diacritics
        let posesNormalized = poses.map((pose, i) => {
          return {
            sanskrit_name: pose.sanskrit_name
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, ""),
            pose_name: pose.pose_name,
            category: pose.category,
            difficulty: pose.difficulty,
            benefits: pose.benefits,
          };
        });

        const findIcon = (index) => {
          let img_url = " ";
          for (let j = 0; j < icons.length; j++) {
            if (
              posesNormalized[index].sanskrit_name === icons[j].sanskrit_name
            ) {
              img_url = icons[j].img_url;
              return img_url;
            }
          }
          img_url = default_img;
          return img_url;
        };
        const fullInfo = posesNormalized.map((pose, i) => {
          return { ...pose, img_url: findIcon(i) };
        });
        setData(fullInfo);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const renderedAsanot = data.map((asana) => {
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
      />
    );
  });

  return <div className="gallery">{renderedAsanot}</div>;
};

export default Gallery;
