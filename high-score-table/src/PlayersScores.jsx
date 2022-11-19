import React from "react"

 const PlayersScores = (props) => (
   <div>
     {props.countryScores.map((obj, i) => {
       return (
         <div key={i} className="Card">
           <div className="Header">
             <h2>High Scores: {obj.name}</h2>
           </div>
           <div key={i} className="Card-data">
             <div className="Player-data">
               {obj.scores.map((data, i) => {
                 return (
                   <h3 key={i}>{data.n[0].toUpperCase() + data.n.slice(1)}</h3>
                 );
               })}
             </div>
             <div className="Player-data">
               {obj.scores.map((data, i) => {
                 return <h3 key={i}>{data.s}</h3>;
               })}
             </div>
           </div>
         </div>
       );
     })}
   </div>
 ); 

export default PlayersScores