import React, { useState } from "react";

export default function Text(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearClick = () => {
    setText("");
  };
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1 className="mt-5 mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#333" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-warning my-1"
          onClick={handleUpClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#0000d7" : "#ffc107",
            color: props.mode === "dark" ? "white" : "dark",
          }}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-warning ms-3 my-1"
          onClick={handleLowClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#0000d7" : "#ffc107",
            color: props.mode === "dark" ? "white" : "dark",
          }}
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-warning ms-3 my-1"
          onClick={handleClearClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#0000d7" : "#ffc107",
            color: props.mode === "dark" ? "white" : "dark",
          }}
        >
          Clear
        </button>
        <button
          className="btn btn-warning ms-3 my-1"
          onClick={handleCopyClick}
          style={{
            backgroundColor: props.mode === "dark" ? "#0000d7" : "#ffc107",
            color: props.mode === "dark" ? "white" : "dark",
          }}
        >
          Copy
        </button>
        <div className="container my-3">
          <h3>your text summary</h3>
          <p>
            {text.split(/\s+/).filter((element)=>{
              return element.length !=0
            }).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").filter((element)=>{
              return element.length !=0
            }).length} minutes read</p>
          <h4>preview</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
