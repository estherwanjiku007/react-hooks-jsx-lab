import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const myStyle={
    color:"firebrick"
  }
  return <div id="home">Home
    <h1 style={myStyle}>
      Your {name} is a web developer from your {city}
    </h1>
  </div>;
}

export default Home;
