import React from "react";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <p>This is the shit man, below is a link back to the home!</p>
      <Link to="/">Home link baby</Link>
    </div>
  );
}

export default Test;
