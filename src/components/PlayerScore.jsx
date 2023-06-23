import React from "react";
import "./PlayerScore.css";
export const PlayerScore = ({score, xPlaying}) => {
  const { xScore, oScore } = score;
  return (
    <div className="playerScore">
      <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xScore}</span> 
      <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oScore}</span>
    </div>
  );
};
