
import Navbar from './Components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { useEffect, useState } from 'react'
import DocPage from './pages/Doc/docPage';
import Home from './pages/home/Home';


function App() {
  
  const [theme, setTheme] = useState('light');
  useEffect (()=>{
    if(theme === 'dark'){
      window.document.body.classList.add("dark");
    }else{
      window.document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = ()=>{
    setTheme(theme==="dark"?"light":"dark");
  };
  

  return (
    <Router>
    <div className="flex flex-col">
    <Navbar themeCheck={theme}  handleSwitch={handleThemeSwitch}/>
    <div >
    <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/docs' element={< DocPage />}></Route>
                
    </Routes>
    </div>
    </div>
    </Router>
  )
}

export default App
