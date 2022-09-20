import React from "react";

import './style.css'

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron"
    >
      {children}
      <h2>Welcome to the MERN Spa!</h2>
      <p>Have a look around to see what we're about</p>
    </div>
  );
}

export default Jumbotron;