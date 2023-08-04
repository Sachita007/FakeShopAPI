
import Navbar from './components/navbar'

import './App.css'
import { useEffect, useState } from 'react'


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
    <>
    <Navbar themeCheck={theme}  handleSwitch={handleThemeSwitch}/>
    <div className='bg-indigo-600 dark:bg-blue-400
     w-full h-screen'>
       
    </div>
    </>
  )
}

export default App
