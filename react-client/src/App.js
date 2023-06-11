import './scss/main.scss'
import Header from './components/template/header';
import Index from './components';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React, {useState, useEffect} from "react"

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  const toggleTheme = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  useEffect(() => {
    localStorage.setItem("theme", theme)
    document.body.className = theme;
  }, [theme]);
  return (
    <div className={`app ${theme}`}>
      <div>
        <Header></Header>
        <button onClick={toggleTheme}> dark</button>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;