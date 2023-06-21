import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, wallet, setWallet, setPlates }) {
  const [ sushiCounter, setSushiCounter ] = useState(1)
  const currentSushis = [...sushis].filter((sushi) => ((sushi.id >= sushiCounter) && (sushi.id <= (sushiCounter+3))))
  
  const handleEat = (sushi) => {
    if (wallet >= sushi.price){
      setWallet((wallet) => wallet - sushi.price)
      setPlates((plates) => [...plates, sushi])
      return true;
    }
    else {
      return false;
    }
  }

  const handleMoreClick = () => {
    setSushiCounter((sushiCounter) => sushiCounter + 4)
  }

  const renderedSushis = currentSushis.map((sushi) => <Sushi
    key={sushi.id}
    name={sushi.name}
    img_url={sushi.img_url}
    price={sushi.price}
    handleEat={handleEat}
    />)

  return (
    <div className="belt">
      {renderedSushis}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
