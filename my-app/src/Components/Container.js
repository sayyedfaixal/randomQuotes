import React from "react";
import NewQuote from "./NewQuote";

function Container() {
  return (
    <div>
      <h3 className="container">From Container</h3>
      <span>
        <NewQuote />
      </span>
    </div>
  );
}

export default Container;
