
import Navbar from './Components/navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { useEffect, useState } from 'react'
import DocPage from './pages/Doc/DocPage';
import Home from './pages/home/Home';
import Cart from './pages/subPages/Cart';
import User from './pages/subPages/User';
import Auth from './pages/subPages/Auth';
import Product from './pages/subPages/Product';
import Introduction from './pages/subPages/Introduction';


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
    
    <Routes>
                <Route exact path='/' element={< Home />}></Route>
                <Route exact path='/docs' element={< DocPage />}>
                  <Route exact path='' element={<Introduction/>} />
                    <Route exact path='product' element={<Product/>} />
                    
                <Route exact path='cart' element={<Cart/>} />
                <Route exact path='auth' element={<Auth/>} />
                <Route exact path='user' element={<User/>} />
                
                  
                </Route>
                
    </Routes>
   
    </div>
    
  )
}

export default App
