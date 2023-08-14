import DocArea from "../../Components/docArea/DocArea";
import Code from "../../Components/code/code";
import Response from "../../Components/code/response";

let product = 
  [
    {
      name: "Get all product",
      link: "/",
      id: "getAllProduct",
      req: "Get",
      endPoint: "app/v1/products",
      description:<span>You can access the list of more then 200 products by using the <span className='bg-black text-white py-1 px-2 rounded-sm'>/products</span> endpoint</span>,
      response:{
    "status": "success",
    "count": 50,
    "Data": [
        {
            "_id": "64c9dab8e1ffe09097e0b844",
            "name": "Angelfish Silk Potali Potli",
            "category": [
                "bags, wallets & belts",
                "bags",
                "pouches and potlis",
                "angelfish pouches and potlis",
                "angelfish silk potali potli (multicolor)"
            ],
            "price": 999,
            "discounted_price": 399,
            "images": [
                "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
                "http://img5a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeepryxh8xez64.jpeg",
                "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprypmwscfp9.jpeg"
            ],
            "description": "Angelfish Silk Potali Potli (Multicolor) Price: Rs. 399 Made by silk Fabric with fancy lace adnored and stylish handle also.(set of 2 piece),Specifications of Angelfish Silk Potali Potli (Multicolor) General Closure Velcro Type Potli Material Fabric Style Code AELKABJ01224-A Ideal For Girls Bag Size Small Occasion Party Color Code Multicolor Dimensions Weight 200 g Body Features Number of Compartments 1",
            "product_rating": 4.5,
            "brand": "Angelfish",
            "product_specifications": [
                {
                    "key": "Closure",
                    "value": "Velcro"
                },
                {
                    "key": "Type",
                    "value": "Potli"
                },
                {
                    "key": "Material",
                    "value": "Fabric"
                },
                {
                    "key": "Style Code",
                    "value": "AELKABJ01224-A"
                },
                {
                    "key": "Ideal For",
                    "value": "Girls"
                },
                {
                    "key": "Bag Size",
                    "value": "Small"
                },
                {
                    "key": "Occasion",
                    "value": "Party"
                },
                {
                    "key": "Color Code",
                    "value": "Multicolor"
                },
                {
                    "key": "Weight",
                    "value": "200 g"
                },
                {
                    "key": "Number of Compartments",
                    "value": "1"
                }
            ]
        },
        {
            "_id": "64c9dab8e1ffe09097e0b854",
            "name": "Vishudh Printed Women's Anarkali Kurta",
            "category": [
                "vishudh printed women's anarkali kurta"
            ],
            "price": 2099,
            "discounted_price": 1049,
            "images": [
                "http://img5a.flixcart.com/image/kurta/f/c/4/vnku004389-beige-pink-vishudh-xl-original-imaehdjtwsnkgzvy.jpeg",
                "http://img6a.flixcart.com/image/kurta/f/c/4/vnku004389-beige-pink-vishudh-xl-original-imaehdjtwsnkgzvy.jpeg",
                "http://img6a.flixcart.com/image/kurta/r/s/c/vnku004389-beige-pink-vishudh-m-original-imaehdjtsg2ukrpe.jpeg",
                "http://img5a.flixcart.com/image/kurta/h/a/b/vnku004389-beige-pink-vishudh-s-original-imaehdjtpyzb4ze7.jpeg",
                "http://img5a.flixcart.com/image/kurta/4/s/4/vnku004389-beige-pink-vishudh-s-original-imaehdjtzxjghfxt.jpeg",
                "http://img6a.flixcart.com/image/kurta/h/y/a/vnku004389-beige-pink-vishudh-l-original-imaehdjttyfjwezt.jpeg"
            ],
            "description": "Specifications of Vishudh Printed Women's Anarkali Kurta Kurta Details Sleeve Half Sleeve Number of Contents in Sales Package Pack of 1 Fabric 100% Cotton Type Anarkali Neck ROUND NECK General Details Pattern Printed Occasion Festive Ideal For Women's In the Box Kurta Additional Details Style Code VNKU004389 BEIGE::PINK Fabric Care Gentle Machine Wash in Lukewarm Water, Do Not Bleach",
            "product_rating": 4.5,
            "brand": "Vishudh",
            "product_specifications": [
                {
                    "key": "Sleeve",
                    "value": "Half Sleeve"
                },
                {
                    "key": "Number of Contents in Sales Package",
                    "value": "Pack of 1"
                },
                {
                    "key": "Fabric",
                    "value": "100% Cotton"
                },
                {
                    "key": "Type",
                    "value": "Anarkali"
                },
                {
                    "key": "Neck",
                    "value": "ROUND NECK"
                },
                {
                    "key": "Pattern",
                    "value": "Printed"
                },
                {
                    "key": "Occasion",
                    "value": "Festive"
                },
                {
                    "key": "Ideal For",
                    "value": "Women's"
                },
                {
                    "value": "Kurta"
                },
                {
                    "key": "Style Code",
                    "value": "VNKU004389 BEIGE::PINK"
                },
                {
                    "value": "Gentle Machine Wash in Lukewarm Water, Do Not Bleach"
                }
            ]
        }
  ]}},
    {
      name: "Get one product",
      link: "/product/getOneProduct",
      id: "getOneProduct",
      req: "Get",
      endPoint: "app/v1/products/64c9dab8e1ffe09097e0b844",
      description:<span>You can get a single product by adding the <span className='bg-black text-white py-1 px-2 rounded-sm'>id</span> as a parameter: <span className='bg-black text-white py-1 px-2 rounded-sm'>/products/:id</span></span>,
      response:{
    "status": "success",
    "data": {
        "_id": "64c9dab8e1ffe09097e0b844",
        "name": "Angelfish Silk Potali Potli",
        "category": [
            "bags, wallets & belts",
            "bags",
            "pouches and potlis",
            "angelfish pouches and potlis",
            "angelfish silk potali potli (multicolor)"
        ],
        "price": 999,
        "discounted_price": 399,
        "images": [
            "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprygdj223es.jpeg",
            "http://img5a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeepryxh8xez64.jpeg",
            "http://img6a.flixcart.com/image/pouch-potli/u/x/v/aelkabj01224-a-angelfish-potli-silk-potali-original-imaeeprypmwscfp9.jpeg"
        ],
        "description": "Angelfish Silk Potali Potli (Multicolor) Price: Rs. 399 Made by silk Fabric with fancy lace adnored and stylish handle also.(set of 2 piece),Specifications of Angelfish Silk Potali Potli (Multicolor) General Closure Velcro Type Potli Material Fabric Style Code AELKABJ01224-A Ideal For Girls Bag Size Small Occasion Party Color Code Multicolor Dimensions Weight 200 g Body Features Number of Compartments 1",
        "product_rating": 4.5,
        "brand": "Angelfish",
        "product_specifications": [
            {
                "key": "Closure",
                "value": "Velcro"
            },
            {
                "key": "Type",
                "value": "Potli"
            },
            {
                "key": "Material",
                "value": "Fabric"
            },
            {
                "key": "Style Code",
                "value": "AELKABJ01224-A"
            },
            {
                "key": "Ideal For",
                "value": "Girls"
            },
            {
                "key": "Bag Size",
                "value": "Small"
            },
            {
                "key": "Occasion",
                "value": "Party"
            },
            {
                "key": "Color Code",
                "value": "Multicolor"
            },
            {
                "key": "Weight",
                "value": "200 g"
            },
            {
                "key": "Number of Compartments",
                "value": "1"
            }
        ],
        "__v": 0
    }
}
    },

    {
      name: "Add product",
      link: "/",
      id: "addProduct",
      req: "Post",
      description:<span>You can create a new product by sending an object like the following to <span className='bg-black text-white py-1 px-2 rounded-sm'>/products</span>.</span>,
      endPoint: "app/v1/products",
      body: { 
            "name": "Test",
            "category": [
                "clothing"
            ],
            "retail_price": 999,
            "discounted_price": 379,
            "images": [
                "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg"
            ],
            "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha Solid Women's Cycling Shorts Shorts ",
            "product_rating": 4.5,
            "brand": "Alisha",
            "product_specifications": [
                {
                    "key": "Number of Contents in Sales Package",
                    "value": "Pack of 3"
                }
            ]},
      response: {
    "status": "success",
    "data": {
        "name": "Test",
        "category": [
            "clothing"
        ],
        "price": 1000,
        "discounted_price": 379,
        "images": [
            "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg"
        ],
        "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha Solid Women's Cycling Shorts Shorts",
        "product_rating": 4.5,
        "brand": "Alisha",
        "product_specifications": [
            {
                "key": "Number of Contents in Sales Package",
                "value": "Pack of 3"
            }
        ],
        "createdAt": "2023-08-07T21:17:57.884Z",
        "_id": "64d160a9ca0630131a60e7d7",
        "__v": 0
    }
},
    },

    {
      name: "Update product",
      link: "/",
      id: "updateProduct",
      req: "Patch",
      description:<span>You can update a product by sending an object like the following and adding the <span className='bg-black text-white py-1 px-2 rounded-sm'>id</span> as a parameter: <span className='bg-black text-white py-1 px-2 rounded-sm'>/products/:id</span></span>,
      endPoint: "app/v1/products/64d160a9ca0630131a60e7d7",
      body: `{
    "name":"Test Updated"
}`,
      response: {
    "status": "success",
    "data": {
        "_id": "64d160a9ca0630131a60e7d7",
        "name": "Test Updated",
        "category": [
            "clothing"
        ],
        "price": 1000,
        "discounted_price": 379,
        "images": [
            "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg"
        ],
        "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha Solid Women's Cycling Shorts Shorts",
        "product_rating": 4.5,
        "brand": "Alisha",
        "product_specifications": [
            {
                "key": "Number of Contents in Sales Package",
                "value": "Pack of 3"
            }
        ],
        "__v": 0
    }
},
    },
    {
      name: "Delete product",
      link: "/",
      id: "deleteProduct",
      req: "Delete",
      description:<span>You can delete a product by sending an object like the following and adding the <span className='bg-black text-white py-1 px-2 rounded-sm'>id</span> as a parameter: <span className='bg-black text-white py-1 px-2 rounded-sm'>/products/:id</span></span>,
      endPoint: "app/v1/products/64d160a9ca0630131a60e7d7",
      response:{
    "status": "success",
    "deleted": {
        "_id": "64d160a9ca0630131a60e7d7",
        "name": "Test Updated",
        "category": [
            "clothing"
        ],
        "price": 1000,
        "discounted_price": 379,
        "images": [
            "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg"
        ],
        "description": "Key Features of Alisha Solid Women's Cycling Shorts Cotton Lycra Navy, Red, Navy,Specifications of Alisha Solid Women's Cycling Shorts Shorts",
        "product_rating": 4.5,
        "brand": "Alisha",
        "product_specifications": [
            {
                "key": "Number of Contents in Sales Package",
                "value": "Pack of 3"
            }
        ],
        "__v": 0
    }
}
    }
  ]

const productFilters = 
    [
        { name: "Filter By Price", link: "/", id: "productFilter" },
        {
          name: "Filter By Category",
          link: "/",
          id: "filterByCategory",
          req: "Get",
          endPoint: "app/v1/products?category=computers",
        },
        {
          name: "Filter By Price",
          link: "/",
          id: "filterByPrice",
          req: "Get",
          endPoint: "app/v1/products?price=995",
        },
        {
          name: "Pagination",
          link: "/",
          id: "pagination",
          req: "Get",
          endPoint: "app/v1/products?limit=4&page=4",
        },
        {
          name: "Get Selected Fields",
          link: "/",
          id: "getSelectedFields",
          req: "Get",
          endPoint: "app/v1/products?fields=name,price",
          response:{
    "status": "success",
    "count": 3,
    "Data": [
        {
            "_id": "64c9dab8e1ffe09097e0b844",
            "name": "Angelfish Silk Potali Potli",
            "price": 999
        },
        {
            "_id": "64c9dab8e1ffe09097e0b854",
            "name": "Vishudh Printed Women's Anarkali Kurta",
            "price": 2099
        },
        {
            "_id": "64c9dab8e1ffe09097e0b824",
            "name": "dongli Printed Boy's Round Neck T-Shirt",
            "price": 2400
        }]
        }},
        {
          name: "Sort product",
          link: "/",
          id: "sortProduct",
          req: "Get",
          endPoint: "app/v1/products?sort=price",
        },
      ]
    
const Product = () => {
  return <div>
    <div id="product" className="text-[3rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>Product</span></div>
    
    {product.map((item)=>(
        <div key={item.id} id={item.id}>
        <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>{item.name}</span></div>
        <div className="text-[1rem] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4"><span>{item.description}</span></div>
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Request:</span>
        <Code req={item.req}  endpoint={item.endPoint} />
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Response:</span>
        {item?.response?<Response data={item?.response} />:<></>}
        </div>
    ))}
    <div id="productFilters" className="text-[3rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>Product Filters</span></div>
    {
        productFilters.map((item)=>(
            <div key={item.id} id={item.id}>
        <div className="text-[2rem] text-gray-700 dark:text-slate-300 font-bold font-Roboto mt-5"><span>{item.name}</span></div>
        <div className="text-[1rem] font-normal dark:text-slate-300 text-gray-600 font-Roboto mt-3 mb-4"><span>{item?.description}</span></div>
        <span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Request:</span>
        <Code req={item.req}  endpoint={item.endPoint} />
        
        {item?.response?<div><span className='text-[1.2rem] font-semibold font-Roboto mb-4'>Response:</span><Response data={item?.response} /></div>:<></>}
        </div>
        ))
    }
  </div>;
};

export default Product;
