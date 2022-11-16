import { useState } from "react";
import "./MemoryCard.css"
const MemoryCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  function clickHandler() {
    setIsFlipped(true)
  }
  return ( 
    <div className="MemoryCard" onClick={clickHandler}>
      <div className={isFlipped  ? "MemoryCardInner flipped" : "MemoryCardInner"}>
        <div className="MemoryCardBack">
          <img src="https://www.digitalcrafts.com/media/Default/assets/logos/dc-logo.svg" alt="DCLogo" />
        </div>
        <div className="MemoryCardFront">∆</div>
      </div>
    </div>
  );
}

export default MemoryCard;