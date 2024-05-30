import React, { useState } from "react";
import "./App.css";
import img from "./copy.png";
import imgdark from "./paper.png";
import Alert from "./Alert";
// import { blue } from "@mui/material/colors";

export default function Text(props) {
  const [alert, setAlert] = useState(null);

  function showAlert(msg, type) {
    setAlert({
      msg: msg,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const [st, setSt] = useState("Enter your text");
  const [text, setText] = useState("");

  function handleclick() {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Your text has been converted to UPPER CASE", "success");
  }

  function hidetext() {
    setSt();
  }
  function handleonchange(e) {
    setText(e.target.value);
  }

  let handleclear = () => {
    setText("");

    let r = document.getElementById("floatingTextarea");
    r.classList.remove("bold");

    let i = document.getElementById("floatingTextarea");
    i.classList.remove("italic");
    setSt("Enter your text");

    showAlert("Text Cleared", "success");
  };

  let handlelower = () => {
    let low = text.toLowerCase();
    setText(low);
    showAlert("Your text has been converted to lower case", "success");
  };

  function handlecopy() {
    let copy = document.getElementById("floatingTextarea");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    showAlert("Copied Text", "success");
  }

  function handlebold() {
    let bold = document.getElementById("floatingTextarea");
    bold.classList.add("bold");
    showAlert("Your text is in bold", "success");
  }

  function handleItalic() {
    let i = document.getElementById("floatingTextarea");
    i.classList.add("italic");
    showAlert("Your text is in Italic style", "success");
  }

  function handlemore() {
    let md = document.getElementById("moredetails");
    md.classList.add("more_open");
    let cl = document.getElementById("cross");
    cl.classList.remove("btn-danger");
    cl.style.color = "grey";
  }

  function handlemoreclose() {
    let mdc = document.getElementById("moredetails");
    mdc.classList.remove("more_open");
    let cl = document.getElementById("cross");
    cl.classList.add("btn-danger");
    cl.style.color = "white";
  }

  return (
    <>
      <div className="alertcss mb-3">
        <Alert alert={alert} />
      </div>
      <div id="seconddiv">
        <img
          src={props.imgcopy}
          alt="copy"
          style={{ width: 38, padding: 6 }}
          className="boldbtn my-4"
          onClick={handlecopy}
        />

        <button
          className="btn btn-primary bold_btn my-4"
          onClick={handlebold}
          style={{ color: props.clr }}
        >
          B
        </button>

        <button
          className="btn btn-primary italicbtn my-4"
          style={{ color: props.clr }}
          onClick={handleItalic}
        >
          <i>I</i>
        </button>
      </div>
      <div className="form-floating text my-5">
        <div style={{ height: 20, width: 150 }} className="mb-2">
          <h6 htmlFor="floatingTextarea">{st}</h6>
        </div>

        <textarea
          style={{
            height: 150,
            backgroundColor: props.bgclr,
            color: props.txtbgclr,
          }}
          className="form-control"
          value={text}
          placeholder="Leave a comment here"
          id="floatingTextarea"
          onChange={handleonchange}
          onClick={hidetext}
        ></textarea>

        <div id="moredetails" className="more pos">
          <center>
            <h4>Your paragrapgh details</h4>
            <br></br>
          </center>
          <h6>
            Word count:{" "}
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </h6>
          <h6>Character Count: {text.length}</h6>
          <h6>
            Minutes read:{" "}
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </h6>

          <center>
            <button className="closebtn my-2" onClick={handlemoreclose}>
              X
            </button>
          </center>
        </div>

        <span>
          <button
            className="btn btn-primary my-3"
            onClick={handleclick}
            disabled={text.length === 0}
          >
            Convert to UpperCase
          </button>
          <button
            className="btn btn-primary my-3 button_lc"
            onClick={handlelower}
            disabled={text.length === 0}
          >
            LowerCase
          </button>

          <button
            className="btn btn-primary my-3 button_lc"
            onClick={handlemore}
            disabled={text.length === 0}
          >
            More Details
          </button>

          <button
            className="btn btn-danger my-3 button_clr"
            id="cross"
            onClick={handleclear}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </span>
      </div>
    </>
  );
}
