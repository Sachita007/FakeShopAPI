import  { useState } from "react"
import SideBarItems from "./sideBarItems"

const Sidebar=()=> {
     let [open , setOpen] = useState(false)
    const handleClick =()=>{
        setOpen(!open)
    }
  return (
    <div>
        <div onClick={handleClick} className={`${open?"hidden":""} text-3xl fixed w-full bg-slate-200 dark:bg-gray-500 mx-0 my-0 top-[75px] px-6 py-2  cursor-pointer  dark:text-cyan-50 md:hidden `}><ion-icon name="menu-outline"></ion-icon>  </div>
        <div className={`${open?"w-[16rem]":"left-[-200rem]"} md:left-0 absolute md:static md:w-[22rem] overflow-y-auto pb-[5rem] h-screen bg-slate-100 dark:bg-slate-700 `}>
        <div onClick={handleClick} className={`${open?"right-2 top-1":"hidden"}  md:hidden text-3xl absolute`}><ion-icon name="close-outline"></ion-icon></div>
        <div className="flex flex-col ml-[2rem] mt-[3rem]  "><SideBarItems/></div>
        </div>
    </div>
  )
}

export default Sidebar