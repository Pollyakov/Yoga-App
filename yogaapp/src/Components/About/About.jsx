import React from "react";
import { useHistory } from "react-router-dom";
import "./about.css";


const About = () => {
  const history = useHistory();
 
  return (
    <div id="about_container">
      <div className="about_card">
      <h1 className = "title" >About</h1>
        <p >This app could help a yoga teacher to build a lesson, to find new
              poses due to their students level and poses categorys needed.
               The seqiences that are biult could be printed and used as cheatsheet
              on a lesson in a studio.</p>
              <button onClick={()=>history.goBack()}>Back</button>
      </div>


    
    </div>
  );
};

export default About;
