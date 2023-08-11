
import shop from "./../../assets/shop.png"
import {LuGithub,LuBook} from "react-icons/lu"



function Home() {
  return (
    <div className="dark:bg-slate-600 h-screen w-screen overflow-y-auto mt-10 dark:text-white">
      <div className="grid grid-cols-1 sm:grid-flow-cols-2 md:grid-cols-2">
        <div className="flex flex-col font-Roboto md:col-auto col-start-1 ml-[3rem] mt-[5rem]">
            <div className="md:text-[4rem] sm:text-[3rem] text-[2rem]  font-Roboto font-bold mb-5">
              <span>Fake Shop API</span>
            </div>
            <div className=" text-[1rem] sm:text-[1rem] md:text-[1.5rem]  mb-7 w-[70%] md:w-auto text-slate-500 font-Rampart dark:text-slate-300">
              <span>Your one-stop solution for all dummy e-commerce data. FakeShopAPI provides developers with the quintessential foundation to test and perfect their e-commerce applications.</span>
            </div>
            <div className="flex md:flex-row flex-col">
            <a className="bg-blue-500  hover:bg-blue-700 w-[15rem] mt-5 font-semibold h-[3.5rem] justify-center flex text-[1.2rem]  flex-row mb-4 text-white  py-2  px-4 rounded"><span> Read Docs</span>  <LuBook className="ml-4 mt-2"/> </a>
            <a className="bg-blue-500  hover:bg-blue-700 w-[15rem] mt-5 font-semibold h-[3.5rem] justify-center flex text-[1.2rem]  md:ml-4 flex-row mb-4 text-white py-2  px-4 rounded"> <span>GitHub</span><LuGithub className="ml-4 mt-2" />  </a>
            </div>
        </div>
        <div className="w-[23rem] sm:w-[30rem] h-auto md:w-[25rem] lg:w-[30rem] h-[35rem] ml-[.8rem] sm:ml-[3rem] mt-[3rem] md:mt-[5rem] md:ml-[1rem] ">
          <img src={shop} alt="" />
        </div>
      </div>
       
      <div className="w-auto flex flex-col mt-[10rem]  items-center font-Roboto ">
         <span className="text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] font-semibold ">Get tired of Lorem ipsum data?!</span>
       <span className="text-[1rem] sm:text-[1.5rem] md:text-[2.5rem] mt-2 font-semibold">Didn't you find any free e-commerce API?!</span>
       <span className="text-[.9rem] sm:text-[1rem] md:text-[1.5rem] mt-7  mb-7 w-[70%] md:w-[90%] md:px-11 font-Rampart md:w-auto text-center text-slate-500 dark:text-slate-300">Get tired of Lorem ipsum data? Didn't find any free e-commerce API? Look no further! FakeShopAPI is a free online REST API that you can use whenever you need pseudo-real data for your e-commerce or shopping website without running any server-side code. It's perfect for teaching, creating sample codes, tests, and more.</span>
      </div>
    </div>
  )
}

export default Home