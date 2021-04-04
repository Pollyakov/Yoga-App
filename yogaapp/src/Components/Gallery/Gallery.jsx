import React, { useEffect, useState } from "react";
import axios from "axios";

import './gallery.css';
import Asana from '../Asana/Asana';
import poses from '../poses.js';

const Gallery = ()=> { 
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("hooks");
    const [search, setSearch] = useState('hooks');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);
    //
    const joinLists = (a, b) =>
    {
      const clean =  b.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
          
       return a;
    }
    useEffect(() => {
        const fetchData = async () => {
          setError(false);
          setIsLoading(true);
          try{
            //short list with images
          const data = await axios.get(
            `https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json`
          ); 
          //poses - long list, no pictures; need to clean diactrics
         const joinedList = joinLists(data.data, poses.toString());
          console.log(joinedList);
          setData(joinedList);
          
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