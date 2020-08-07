import React from "react";
import { Cell } from "./Cell";
import './CellsFrame.css';

export const CellsFrame = (props) => {
  const { numberOfCells, selectedCell } = props;
  const cellsIdsArray = [...Array(numberOfCells).keys()];

  return (
    <div className="cellsFrame">
      {cellsIdsArray.map((id) => {
        return <Cell key={id} active={id === selectedCell} />;
      })}
    </div>
  );
};
