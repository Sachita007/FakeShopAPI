
import { Outlet } from "react-router-dom"

import Sidebar from "../../Components/sidebar/Sidebar"




const DocPage =() =>{
   
  return (
    <div className='flex fixed w-full mt-[4.9rem]'>
        
        <Sidebar />
        <div className=" dark:bg-gray-900   overflow-scroll h-screen pb-[10rem] pr-3 dark:text-white ">
            <div className="md:ml-[5rem] md:mt-5 ml-[2rem] mt-[5rem]"> 
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DocPage
