import './App.css';
import React from "react"
//import SearchData from './Components/SearchData';
//import GetAllData from './Components/GetAllData';
import QuestData from "./questsData.json"
import { useQuantity } from "./Hooks/useQuantity";
import { Counter } from "./Components/Counter";
//import Item from './Components/Item/index'
//<span>+ 0 / 1 -</span>

function App() {
  const quantity = useQuantity();

  return (
    <div className="App" style={{backgroundColor:"black", padding: "20px 0px"}}>
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Tarkov Booster 1 - 15</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
      {
        QuestData.map(q =>
        <div style={{display: "flex", flexDirection: "column", margin: "10px", backgroundColor: "#0a0a0a", justifyContent: "center", width: "120px", height: "200px"}}>
          <div style={{maxWidth: "64px", alignSelf: "center", marginBottom: "10px"}}>
            {<img src={q.icon} style={{width:"100%", maxHeight:"130px"}} alt={q.unid}/>}
          </div>
          <div className="buttons">
            <Counter quantity={quantity} neededValue={q.quest} />
          </div>
        </div>
        )
      }
      </div>
    </div>
  );
}

//{{display: q.quest === 3? "none" : "flex"}}

export default App;
