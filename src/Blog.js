import React from "react";
import img from "./blog.gif";

export default function Blog() {
  return (
    <div>
      <center>
        <h1 style={{ marginTop: 20 }}>
          Launching <span style={{ color: "lightseagreen" }}>Soon</span>
        </h1>
        <div>
          <img src={img} alt="gif" />
        </div>
      </center>
    </div>
  );
}
