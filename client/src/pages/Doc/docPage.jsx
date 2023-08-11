

import Sidebar from "../../Components/sidebar/Sidebar"

import DocArea from "../../Components/docArea/DocArea"

const DocPage =() =>{
   
  return (
    <div className='flex mt-[4.7rem]'>
        
        <Sidebar />
        <div className=" dark:bg-slate-600 w-full  overflow-y-auto h-screen dark:text-white ">
            <div className="md:ml-[5rem] md:mt-5 ml-[2rem] mt-[5rem]">
                <h1 className="md:text-[4rem] text-[2.5rem] font-bold text-gray-700 dark:text-slate-300 font-Roboto">How to use it</h1>
                <div className="md:w-[70%] w-[80%]  mt-3 mb-3">
                    <p className=" font-Roboto text-[14px] md:text-[1rem] dark:text-slate-300 text-gray-600 ">FakeShopeAPI can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how FakeShopAPI works and feel free to enjoy it in your awesome projects!</p>
               </div>
                <DocArea />
            </div>
        </div>
    </div>
  )
}

export default DocPage