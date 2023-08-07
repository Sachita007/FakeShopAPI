import  { useState } from "react"
import SideBarItems from "./sideBarItems"

const Sidebar=()=> {
     let [open , setOpen] = useState(false)
    const handleClick =()=>{
        setOpen(!open)
    }
  return (
    <div>
        <div onClick={handleClick} className={`${open?"hidden":"left-[2rem] top-[5.5rem]"} text-3xl absolute  cursor-pointer  dark:text-cyan-50 md:hidden transition duration-500`}><ion-icon name={open?"close-outline":"menu-outline"}></ion-icon> </div>
        <div className={`${open?"w-[16rem]":"left-[-200rem]"} md:left-0 absolute md:static md:w-[25rem] overflow-y-auto h-screen bg-slate-100 dark:bg-slate-700 transition duration-500`}>
        <div onClick={handleClick} className={`${open?"right-2 top-1":"hidden"}  md:hidden text-3xl absolute`}><ion-icon name="close-outline"></ion-icon></div>
        <div className="flex flex-col ml-[2rem] mt-[3rem]  "><SideBarItems/></div>
        </div>
    </div>
  )
}

export default Sidebar