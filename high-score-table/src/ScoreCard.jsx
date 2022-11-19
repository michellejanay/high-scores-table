import React from "react";
import PlayersScores from "./PlayersScores";
import allCountryScores from "./Scores.js";
allCountryScores.sort((a, b) => (a.name < b.name ? -1 : 1));
// allCountryScores.scores.sort((a,b) => (parseInt(a.s > b.s ? -1 : 1)))

const ScoreCard = () => (
  <div>
    <header>
      <h1>High Scores Per Country</h1>
    </header>
    <PlayersScores countryScores={allCountryScores}/>
  </div>
);

export default ScoreCard;
