
import Item from './item'

let product = [
    {name:"Get all product", link:"#getAllProduct"},
    {name:"Get one product", link:"#getOneProduct"},
    {name:"Add product", link:"#addProduct"},
    {name:"Update product", link:"#updateProduct"},
    {name:"Delete product", link:"#deleteProduct"},
    {name:"Product Filters", link:"#productFilters" , subArr:[
{name:"Filter By Category", link:"#filterByCategory"},
{
          name: "Filter By Price",
          
          link: "#filterByPrice"
         
          
        },
{name:"Pagination", link:"#pagination"},
{name:"Get Selected Fields", link:"#getSelectedFields"},
{name:"Sort product", link:"#sortProduct"}]}
]

let user = [
    {name:"Get all user", link:"#getAllUser"},
    {name:"Get one user", link:"#getOneUser"},
    {name:"Add user", link:"#addUser"},
    {name:"Update user", link:"#updateUser"},
    {name:"Delete user", link:"#deleteUser"}
]
let Auth = [
    {name:"LogIn", link:"#logIn"},
    {name:"Get Profile With Session", link:"#getProfile"}
]

let Cart = [
    {name:"Get all Cart", link:"#getAllCart"},
    {name:"Get Cart By User id", link:"#getOneCart"},
    {name:"Add Cart", link:"#addCart"},
    {name:"Update Cart", link:"#updateCart"},
    {name:"Delete Item", link:"#deleteItem"},
    {name:"Delete Cart", link:"#deleteCart"}
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