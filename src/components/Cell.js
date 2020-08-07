import React from "react";
import './Cell.css';

export const Cell = (props) => {
  const { active } = props;

  return <div className={active ? 'cell active' : 'cell' } ></div>;
};