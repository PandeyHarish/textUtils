import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  let changeTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131313";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgba(255,255,255,0)";
      document.body.style.color = "#131313";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="Text Utils"
          tab1="Home"
          tab2="About"
          mode={mode}
          changeTheme={changeTheme}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextForm heading="Enter your text below" mode={mode} />}
          />
          <Route exact path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
