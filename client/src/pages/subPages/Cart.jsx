import Code from "../../Components/code/code"
import Response from "../../Components/code/response"


function Cart() {

 let cart = [
  {
    name: "Get All Cart",
    
    id: "getAllCart",
    req: "GET",
    endPoint: "app/v1/carts",
    description: (
      <span>
        You can access the list more then 10 carts by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts
        </span>{" "}
        endpoint
      </span>
    ),
    response:{
    "status": "success",
    "count": 1,
    "Data": [
        {
            "userId": "64c9e431b3a6a1915d40f099",
            "items": [
                {
                    "productId": "64c9dab8e1ffe09097e0b849",
                    "name": "Angelfish",
                    "price": 100,
                    "quantity": 1,
                    "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
                },
                {
                    "productId": "64c9dab8e1ffe09097e0b844",
                    "name": "Angelfish 2",
                    "price": 1000,
                    "quantity": 3,
                    "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
                }
            ],
            "total": 1120,
            "__v": 0
        }
    ]
}},
{
    name: "Get Cart By User Id",
    
    id: "getOneCart",
    req: "GET",
    endPoint: "app/v1/carts/64c9e431b3a6a1915d40f099",
    description: (
      <span>
        You can get the cart of user  by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts/{"<userId>"}
        </span>{" "}
        endpoint.
      </span>
    ),
    response:{
    "status": "success",
    "count": 1,
    "Data": [
        {
            "userId": "64c9e431b3a6a1915d40f099",
            "items": [
                {
                    "productId": "64c9dab8e1ffe09097e0b849",
                    "name": "Angelfish",
                    "price": 100,
                    "quantity": 1,
                    "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
                },
                {
                    "productId": "64c9dab8e1ffe09097e0b844",
                    "name": "Angelfish 2",
                    "price": 1000,
                    "quantity": 3,
                    "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
                }
            ],
            "total": 1120,
            "__v": 0
        }
    ]
}},
{
    name: "Add Cart",
    
    id: "addCart",
    req: "POST",
    endPoint: "app/v1/carts/64c9e431b3a6a1915d40f099",
    description: (
      <span>
        You can  add item and create cart by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts/{"userId"}
        </span>{" "}
        endpoint. And passing cart data as JSON in body.
        <br></br> NOTE:  It will increase quantity in cart if the item already exist in cart, if not it will add new item in cart.
      </span>
    ),
    body:{
    "item":{
        
            "productId": "64c9dab8e1ffe09097e0b844",
            "name": "Angelfish 3",
            "quantity":1,
            "price": 10,
            "image": 
                "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
    }
},
    response:{
    "status": "success",
    "data": {
        "_id": "64d84950e7da17a39d156a73",
        "userId": "64c9e431b3a6a1915d40f099",
        "items": [
            {
                "productId": "64c9dab8e1ffe09097e0b849",
                "name": "Angelfish",
                "price": 100,
                "quantity": 1,
                "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
                "_id": "64d84950e7da17a39d156a74"
            },
            {
                "productId": "64c9dab8e1ffe09097e0b844",
                "name": "Angelfish 2",
                "price": 1000,
                "quantity": 4,
                "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
                "_id": "64d8496ce7da17a39d156a7a"
            }
        ],
        "total": 1130,
        "__v": 0
    }
}},
{
    name: "Update  Cart",
    
    id: "updateCart",
    req: "PATCH",
    endPoint: "app/v1/carts/64c9e431b3a6a1915d40f099",
    description: (
      <span>
        You can update cart (increase quantity of item, update name, update image ) by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts/{"userId"}
        </span>{" "}
        endpoint. And passing cart data as JSON in body.
        <br/><br/> NOTE: You have to pass productId also in body to update cart item, it will not work if productId is not passed.
      </span>
    ),
    body:{
    "item":{
        
            "productId": "64c9dab8e1ffe09097e0b849",
            "name": "Angel",
            "quantity":1,
            "price": 1100,
            "image": 
                "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg"
    }
},
    response:{
    "status": "success",
    "data": {
        "_id": "64d84950e7da17a39d156a73",
        "userId": "64c9e431b3a6a1915d40f099",
        "items": [
            {
                "productId": "64c9dab8e1ffe09097e0b849",
                "name": "Angel",
                "price": 1100,
                "quantity": 1,
                "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
                "_id": "64d84950e7da17a39d156a74"
            },
            {
                "productId": "64c9dab8e1ffe09097e0b844",
                "name": "Angelfish 2",
                "price": 1000,
                "quantity": 4,
                "image": "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
                "_id": "64d8496ce7da17a39d156a7a"
            }
        ],
        "total": 5100,
        "__v": 0
    }
}},
{
    name: "Delete Item",
    
    id: "deleteItem",
    req: "DELETE",
    endPoint: "app/v1/carts/64c9e431b3a6a1915d40f099/64c9dab8e1ffe09097e0b849",
    description: (
      <span>
        You can delete item from cart by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts/{"<userId>"}/{"<productId>"}
        </span>{" "}
        endpoint.
      </span>
    ),
    response:{
    "status": "success"
}},
{
    name: "Delete Cart",
    
    id: "deleteCart",
    req: "DELETE",
    endPoint: "app/v1/carts/64c9e431b3a6a1915d40f099",
    description: (
      <span>
        You can delete cartt by using the{" "}
        <span className="bg-black text-white py-1 px-2 rounded-sm">
          /carts/{"<userId>"}
        </span>{" "}
        endpoint.
      <br/><br/> NOTE:  You not able to delete all cart , to delete you have to create your own cart.

      </span>
    ),
    response:{
    "status": "success"
}}
 ]


  return (
    <div>
      <div
        id="Cart"
        className="text-[3rem] text-gray-900 dark:text-slate-300 font-bold font-Roboto mt-5"
      >
        <span>Cart</span>
      </div>

      {cart.map((item) => (
        <div key={item.id} id={item.id}>
          <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5">
            <span>{item.name}</span>
          </div>
          <div className="text-[1rem] md:w-[90%] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4">
            <span>{item.description}</span>
          </div>
          <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            Request:
          </span>
          <Code req={item.req} endpoint={item.endPoint} />

          {item?.body ? (
            <div>
              <span className="text-[1rem] font-semibold font-Roboto mb-4">
                Body:
              </span>
              <Response data={item?.body} />
            </div>
          ) : (
            <></>
          )}
          <span className="text-[1.2rem] font-semibold font-Roboto mb-4">
            Response:
          </span>
          {item?.response ? <Response data={item?.response} /> : <></>}
        </div>
      ))}
      
      </div>
  )
}

export default Cart