import React, { useState } from "react";
import "../App.css";

export default function TextForm(props) {
  const [text, updatedText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, makeItalic] = useState(false);
  const [isUnderline, underlined] = useState(false);
  const [isRight, rightAligned] = useState(false);
  const [isCenter, centered] = useState(false);
  const [isLeft, leftAligned] = useState(false);
  const [isJustified, justified] = useState(false);
  const refreshValue = (e) => {
    updatedText(e.target.value);
  };

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    updatedText(newText);
  };

  const bold = () => {
    setIsBold((prevState) => !prevState);
  };
  const italic = () => {
    makeItalic((prevState) => !prevState);
  };
  const underline = () => {
    underlined((prevState) => !prevState);
  };
  const centerAlign = () => {
    centered((prevState) => !prevState);
  };
  const rightAlign = () => {
    rightAligned((prevState) => !prevState);
  };
  const leftAlign = () => {
    leftAligned((prevState) => !prevState);
  };
  const justify = () => {
    justified((prevState) => !prevState);
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div>
          <button
            className={`btn btn-${props.mode === "dark" ? "dark" : "light"} ${
              isBold ? "btn-outline-primary" : ""
            }`}
            onClick={bold}
          >
            <i className="ri-bold fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isItalic ? "btn-outline-primary" : ""}`}
            onClick={italic}
          >
            <i className="ri-italic fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isUnderline ? "btn-outline-primary" : ""}`}
            onClick={underline}
          >
            <i className="ri-underline fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isLeft ? "btn-outline-primary" : ""}`}
            onClick={leftAlign}
          >
            <i className="ri-align-left fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isCenter ? "btn-outline-primary" : ""}`}
            onClick={centerAlign}
          >
            <i className="ri-align-center fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isRight ? "btn-outline-primary" : ""}`}
            onClick={rightAlign}
          >
            <i className="ri-align-right fontbold"></i>
          </button>

          <button
            className={`btn btn-${
              props.mode === "dark" ? "dark" : "light"
            } m-1 ${isJustified ? "btn-outline-primary" : ""}`}
            onClick={justify}
          >
            <i className="ri-align-justify fontbold"></i>
          </button>
        </div>
        <div className="input-group mt-4">
          <textarea
            className="form-control fontbold"
            aria-label="With textarea"
            rows="8"
            value={text}
            onChange={refreshValue}
            style={{
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              textAlign: isCenter
                ? "center"
                : isLeft
                ? "left"
                : isRight
                ? "right"
                : isJustified
                ? "justify"
                : "left",
              backgroundColor: `${
                props.mode === "light" ? "white" : "#131313"
              }`,
              color: `${props.mode === "light" ? "#131313" : "white"}`,
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary my-4" onClick={convertToUpperCase}>
          Convert to upper case
        </button>
      </div>
      <div className="container">
        <h1>Text Summary</h1>
        <p>
          <span className="fontbold">{text.split(" ").filter((element)=>{return element.length !== 0}).length}</span> words and{" "}
          <span className="fontbold">{text.length}</span> characters
        </p>
      </div>
    </>
  );
}
