import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis, setSushis ] = useState([])
  const [ wallet, setWallet ] = useState(100)
  const [ plates, setPlates ] = useState([])
  
  useEffect(()=>{
    fetch(API)
      .then((r) => r.json())
      .then((sushiArr) => setSushis(sushiArr))
  },[])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} wallet={wallet} setWallet={setWallet} setPlates={setPlates}/>
      <Table wallet={wallet} plates={plates}/>
    </div>
  );
}

export default App;
