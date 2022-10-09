import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About'
import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#041C32";
      showAlert("success", "dark mode has been enabled !")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "light mode has been enabled !")
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="WORDPLAY" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <About mode={Mode} toggleMode={toggleMode}></About>
      <Textform heading="Enter the text below" mode={Mode} showAlert={showAlert} /> */}
        <Routes>
          <Route exact path="/" element={<Textform heading="Enter the text below" mode={Mode} showAlert={showAlert} />}></Route>
          <Route exact path="/about" element={<About mode={Mode} toggleMode={toggleMode}></About>}></Route>
        </Routes>

      </BrowserRouter> 
    </>
  );
}

export default App;
