import React, { useState } from "react";

function Sushi({ name, img_url, price, handleEat }) {
  const [ isEaten, setIsEaten ] = useState(false)
  const handleClick = () => {
    if (!isEaten)
      setIsEaten(handleEat({name: name, price: price}))
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
