
import Navbar from './components/navbar'

import './App.css'
import { useEffect, useState } from 'react'
import DocPage from './pages/Doc/docPage';


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
    <div className="flex flex-col">
    <Navbar themeCheck={theme}  handleSwitch={handleThemeSwitch}/>
    <div >
    <DocPage/>
    </div>
    </div>
  )
}

export default App
