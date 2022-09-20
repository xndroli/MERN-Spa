import React from "react";

import './style.css'

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron"
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;