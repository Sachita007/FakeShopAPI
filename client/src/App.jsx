import Navbar from "./Components/navbar";
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import DocPage from "./pages/Doc/DocPage";
import Home from "./pages/home/Home";
import Cart from "./pages/subPages/Cart";
import User from "./pages/subPages/User";
import Auth from "./pages/subPages/Auth";
import Product from "./pages/subPages/Product";
import Introduction from "./pages/subPages/Introduction";
import Contact from "./pages/contact/contact";


function App() {
 
  
  

  return (
    <div className="flex flex-col">
      <Navbar  />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/docs" element={<DocPage />}>
          <Route exact path="" element={<Introduction />} />
          <Route exact path="product" element={<Product />} />
          
          <Route exact path="cart" element={<Cart />} />
          <Route exact path="auth" element={<Auth />} />
          <Route exact path="user" element={<User />} />
        </Route>
        <Route exact path="/contact" element={<Contact />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
