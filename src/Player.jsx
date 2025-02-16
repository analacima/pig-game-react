function Player({ name, score, current, isActive, isWinner }) {
  return (
    <section className={`player ${isActive ? "player--active" : ""} player${isWinner ? "--winner" : ""}`}>
      <h2 className="name" id="name">
        {name}
      </h2>
      <p className="score" id="score">
        {score}
      </p>
      <div className="current">
        <p className="current-label">Current</p>
        <p className="current-score" id="current">
          {current}
        </p>
      </div>
    </section>
  );
}

export default Player;

//import React from 'react'

// function Player({ name, score, current, isActive }) {
//   return (
//     <div className={`player ${isActive ? 'active' : ''}`}>
//       <h2>{name}</h2>
//       <p>Score: {score}</p>
//       <p>Current: {current}</p>
//     </div>
//   )
// }

// export default Player
