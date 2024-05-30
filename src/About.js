import React from "react";
import "./App.css";
import img from "./about.gif";
import insta from "./instagram.png";
import git from "./github.png";
import link from "./linkedin.png";

export default function About() {
  return (
    <div>
      <center>
        <img src={img} alt="about" height={200} width={200} />
      </center>
      <div className="aboutimg">
        <center>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/shashank2121/">
                <img src={link} alt="gif" height={50} width={50} />
              </a>
            </li>
            <li>
              <a href="https://app.netlify.com/teams/shashankpandey2103/overview">
                <img
                  src={git}
                  alt="gif"
                  height={50}
                  width={50}
                  style={{ marginLeft: 80, marginRight: 80 }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the_shashank21/">
                <img src={insta} alt="gif" height={50} width={50} />
              </a>
            </li>
          </ul>
        </center>
      </div>
    </div>
  );
}
