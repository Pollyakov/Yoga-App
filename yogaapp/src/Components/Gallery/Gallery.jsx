import React, { useEffect, useState } from "react";
import axios from "axios";

import './gallery.css';
import Asana from '../Asana/Asana';

const Gallery = ()=> { 
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("hooks");
    const [search, setSearch] = useState('hooks');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          setError(false);
          setIsLoading(true);
          try{
          const data = await axios.get(
            `https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json`
          );
          console.log(data);
          setData(data.data);
          
        } catch (error) {
          setError(true);
          console.log(error);
        }
          setIsLoading(false);
        };
        fetchData();
        //Once the query changes, the data request should fire again.
      }, []);

      const renderedAsanot = data.map((asana) => {
        return (
          <li key={asana.id}>
            <img src={asana.img_url}/>
             <div>{asana.sanskrit_name}</div>
          </li>
        );
      });

    return (
    <div className = 'gallery'>
        <ul>
            {renderedAsanot}
        </ul>
      
       
    </div>
    )
};

export default Gallery;