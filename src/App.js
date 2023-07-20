import "./App.css";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path='/' element={<TextForm mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path='/About' element={<About mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path='/Contact' element={<Contact mode={mode} toggleMode={toggleMode}/>} />
          <Route exact path='/*' element={<Error mode={mode} toggleMode={toggleMode}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
