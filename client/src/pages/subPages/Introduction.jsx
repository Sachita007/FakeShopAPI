import Code from "../../Components/code/code"
import { Link } from "react-router-dom"

function Introduction() {
  return (
    <div><h1 className="md:text-[4rem] text-[2.5rem] font-bold text-gray-700 dark:text-slate-300 font-Roboto">How to use it</h1>
                <div className="md:w-[70%] w-[80%]  mt-3 mb-3">
                    <p className=" font-Roboto text-[14px] md:text-[1rem] dark:text-slate-300 text-gray-600 ">FakeShopeAPI can be used with any type of shopping project that needs products, carts, and users in JSON format. you can use examples below to check how FakeShopAPI works and feel free to enjoy it in your awesome projects!</p>
               </div>
               <div className="mt-[3rem]">
               <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            Base Link:
          </span>
          <Code req={``} endpoint="app/v1/" />
               </div>
               <div className="mt-[2rem]">
                <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            There are 4 main resources need in shopping prototypes:

            <ul className="list-disc ml-9">
              <li><Link to={'/docs/product'}  className="hover:text-blue-600">Products</Link></li>
              <li><Link to={'/docs/user'} className="hover:text-blue-600">Users</Link></li>
              <li><Link to={'/docs/auth'} className="hover:text-blue-600">Auth</Link></li>
              <li><Link to={'/docs/cart'} className="hover:text-blue-600">Cart</Link></li>
            </ul>
          </span>
               </div>

               </div>
  )
}

export default Introduction