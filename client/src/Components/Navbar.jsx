/* eslint-disable react/prop-types */
import { useState } from 'react'
import logo from './../assets/logo.png'


const Navbar = (props) => {
  let links = [
    {name:"Home", link:"/"},
    {name:"Docs", link:"/docs"},
    {name:"GitHub", link:"/"},
    {name:"Contact ", link:"/"}
  ]
  let [open, setOpen] = useState (false)
  let [dark,setDark] =useState(true)

  const handleDarkMode = ()=>{
    setDark(props.themeCheck==="dark"?true:false)
    props.handleSwitch()
  }
  const handleClick = ()=>{
       setOpen(!open)
  }
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10 dark:bg-gray-800  bg-white  ">
      <div className="md:flex items-center justify-between bg-inherit py-4 md:px-10 md:mx-11 px-7 ">
        
        <div className="flex font-bold text-2xl cursor-pointer items-center font-[Poppins] dark:text-white text-gray-800">
          <samp className='text-3xl text-indigo-600 mr-1 pt-2'><img className="w-7 md:w-10  mr-2" src={logo} alt="" /></samp>
          <p className="text-[20px] mt-3 md:mt-2 md:ml-1  md:text-3xl">FakeShopAPI</p>
        </div>

        <div onClick={handleClick} className='text-3xl absolute right-8 top-6 cursor-pointer  dark:text-cyan-50 md:hidden '><ion-icon name={open?"close-outline":"menu-outline"}></ion-icon> </div>
        
        <ul className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto  dark:bg-gray-800 bg-white left-0 w-full md:w-auto md:pl-0 pl-9  ${open?'top-19 z-20 ':'top-[-490px] '}`}>{
          links.map((link)=>(
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-gray-800 dark:text-white dark:hover:text-slate-300 hover:text-gray-400 ">{link.name} </a>
            </li>
          ))
        }
        </ul> 
        <div onClick={handleDarkMode} className={`text-2xl absolute md:right-8 dark:text-white right-[5rem] cursor-pointer items-center  top-[26px] transition-all duration-500 `}> 
        <ion-icon className="transition-all duration-500 ease-in" name={dark?"moon":"sunny"}></ion-icon>
        </div>      
      </div>
    </div>
  )
}

export default Navbar