import  { useState } from "react"
import Code from "../../Components/code/code"
import Siderbar from "../../Components/sidebar/sideBarItems"

const DocPage =() =>{
    let [open , setOpen] = useState(false)
    const handleClick =()=>{
        setOpen(!open)
    }
  return (
    <div className='flex'>
        
        <div onClick={handleClick} className={`${open?"hidden":"left-[2rem] top-[5.5rem]"} text-3xl absolute  cursor-pointer  dark:text-cyan-50 md:hidden transition duration-500`}><ion-icon name={open?"close-outline":"menu-outline"}></ion-icon> </div>
        <div className={`${open?"w-[16rem]":"left-[-200rem]"} md:left-0 absolute md:static md:w-[25rem] overflow-y-auto h-screen bg-slate-100 dark:bg-slate-700 transition duration-500`}>
        <div onClick={handleClick} className={`${open?"right-2 top-1":"hidden"}  md:hidden text-3xl absolute`}><ion-icon name="close-outline"></ion-icon></div>
        <div className="flex flex-col ml-[2rem] mt-[3rem]  "><Siderbar/></div>
        
        </div>
        <div className=" dark:bg-slate-600 w-full h-[100%]  dark:text-white ">
            <div className="md:ml-[5rem] md:mt-5 ml-[2rem] mt-[5rem]">
                <h1 className="md:text-[4rem] text-[2.5rem] font-bold text-gray-700 dark:text-slate-300 font-Roboto">How to use it</h1>
                <div className="md:w-[70%] w-[80%]  mt-3 mb-3">
                    <p className=" font-Roboto text-[14px] md:text-[1rem] dark:text-slate-300 text-gray-600 ">FakeShopeAPI can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how fakeStoreApi works and feel free to enjoy it in your awesome projects!</p>
               </div>
                <Code/>
            </div>
        </div>
    </div>
  )
}

export default DocPage