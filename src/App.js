import './App.css';
import React from "react"
import ItemsList from './Components/ItemsList/index'

function App() {
  return (
    <div className="App" style={{backgroundColor:"black", padding: "20px 0px"}}>
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Tarkov Booster 1 - 40</h1>
      <ItemsList />
    </div>
  );
}

/*
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Tarkov Booster 1 - 15</h1>
      <ItemsList />
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Tarkov Booster 1 - 40</h1>
      <ItemsList />
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Gunsmith Parts</h1>
      <h1 style={{color: "#9a8866", paddingBottom: "20px"}}>Hideout Parts</h1>
*/

export default App;
