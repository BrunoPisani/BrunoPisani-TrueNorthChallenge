import React, { useState, useEffect } from "react";
import { CellsFrame } from "../components/CellsFrame";
import { ButtonsBar } from "../components/ButtonsBar";
import './CodingChallenge.css';

const CELLS = 3;

const CodingChallenge = () =>  {
  const size = useWindowSize();
  const [selectedId, _setSelectedId] = useState(0);
  
  function setSelectedId(selectedId, max) {
    _setSelectedId((selectedId >= 0) ? selectedId % max : max - 1);
  }

  function goLeft() {
    setSelectedId(selectedId - 1, CELLS);
  }

  function goRight() {
    setSelectedId(selectedId + 1, CELLS);
  }

  return (
    <div id="AppFrame" style={{width:'100%', height: size.height}}>
        <div id="CodingChallengeFrame">
            <CellsFrame numberOfCells={CELLS} selectedCell={selectedId} />
            <ButtonsBar
                onLeftButtonClick={goLeft}
                onRightButtonClick={goRight}
            />
        </div>
    </div>
  )
}

export default CodingChallenge;

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        
        handleResize();

        return () => window.removeEventListener("resize", handleResize);

    }, []); 

    return windowSize;
}
