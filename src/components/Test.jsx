import React from "react";
import { Link } from "react-router-dom";

function Test() {
  return (
    <div>
      <p>
        This file was used as a test of my implementation of react routing using
        these Link components instead of anchor tags or hrefs. It succeeded.{" "}
      </p>
      <Link to="/">Should reutrn me to the homepage</Link>
    </div>
  );
}

export default Test;
