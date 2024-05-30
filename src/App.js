import { useState } from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Blog from "./Blog";
import About from "./About";
import Text from "./Text";
import img from "./copy.png";
import imgdark from "./paper.png";
// import Alert from "./Alert";
import { Route, Routes } from "react-router-dom";

function App() {
  const [bgclr, setBgclr] = useState("white");
  const [txtbgclr, setTxtbgclr] = useState("black");
  const [clr, setClr] = useState("black");
  const [count, setCount] = useState(0);
  const [textclr, setTextclr] = useState("light");
  const [imgcopy, setImgcopy] = useState(img);
  function handlemode() {
    if (count === 0) {
      setCount(1);
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTextclr("dark");
      setClr("white");
      setImgcopy(imgdark);
      setBgclr("black");
      setTxtbgclr("white");
    } else {
      setCount(0);
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTextclr("light");
      setClr("black");
      setImgcopy(img);
      setBgclr("white");
      setTxtbgclr("black");
    }
  }

  return (
    <>
      <Navbar mode={handlemode} textclr={textclr} />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <Text
              clr={clr}
              imgcopy={imgcopy}
              bgclr={bgclr}
              txtbgclr={txtbgclr}
            />
          }
        />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
