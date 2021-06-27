import "./App.css";
import React, { useEffect, useState} from "react";
import axios from "axios";
import default_img from "../src/Components/Gallery/Gallery";
import AsanaInfo from "./Components/AsanaInfo/AsanaInfo";
import poses from "./Components/poses";
import Gallery from "./Components/Gallery/Gallery";
import LandingPage from "./Pages/LandingPage";
import NotFound from "./Pages/NotFound.jsx";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);
  // useEffect (()=> {
  //   const fetchData = async()=> {
  //     const data = await axios.get("http://localhost:5000/api/test"
  //     );
  //     console.log(data);
  //   };
  //   fetchData();

  // }, []);

  useEffect(() => {
    const fetchData = async () => {
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
            id: i,
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
          return { ...pose, img_url: findIcon(i), id: i };
        });
        console.log(fullInfo);
        setData(fullInfo);
      }
    fetchData();
    
  }, []);



  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route
                exact path="/asanas"
                render={(props) => (
                  <Gallery {...props} dataFromState = {data}  />
                  )}
            />
          {/* <Route
                 exact path="/asanas/:id" 
                 render={(props) => (
                   <AsanaInfo {...props} id={props.id}  />
                 )}
           /> */}

            <Route
                 exact path="/asanas/:eng_name" 
                 component={AsanaInfo}
           />
          <Route path="/about" component={About} />
          <Route component={NotFound} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
