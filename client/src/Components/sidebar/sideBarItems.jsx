
import Item from './item'

let product = [
    {name:"Get all product", link:"/"},
    {name:"Get onr product", link:"/"},
    {name:"Add product", link:"/"},
    {name:"Update product", link:"/"},
    {name:"Delete product", link:"/"},
    {name:"product Filters", link:"/" , subArr:[{name:"Filter By Price", link:"/"},
{name:"Filter By Category", link:"/"},
{name:"Pagination", link:"/"},
{name:"Get Selected Fields", link:"/"},
{name:"Sort product", link:"/"}]}
]

let user = [
    {name:"Get all user", link:"/"},
    {name:"Get onr user", link:"/"},
    {name:"Add user", link:"/"},
    {name:"Update user", link:"/"},
    {name:"Delete user", link:"/"},
    {name:"product Filters", link:"/"}
]
let Auth = [
    {name:"LogIn", link:"/"},
    {name:"Get Profile With Session", link:"/"}
]

let Cart = [
    {name:"Get all product", link:"/"},
    {name:"Get onr product", link:"/"},
    {name:"Add product", link:"/"},
    {name:"Update product", link:"/"},
    {name:"Delete product", link:"/"},
    {name:"product Filters", link:"/"}
]
const siderbar=()=> {
  return (
    <div>
         <Item title="Product" array={product}/>
         <Item title="User" array={user}/>
         <Item title="Auth" array={Auth}/>
         <Item title="Cart" array={Cart}/>
         
         
         
    </div>
  )
}

export default siderbar