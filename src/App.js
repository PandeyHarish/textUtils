import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {
  return (
    <>
      <Navbar title="Text Utils" tab1="Home" tab2="About"/>
      <div className="container">
        <TextForm heading="Enter your text below"/>
      </div>
    </>
  );
}

export default App;
