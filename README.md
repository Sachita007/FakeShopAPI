## ![FakeShopAPI](./static-file/hero.png.png)

### FakeShopAPI

[FakeShopAPI](https://fake-shopapi.netlify.app) is a free online REST API that you can use whenever you need Pseudo-real data for
your e-commerce or shopping website without running any server-side code.
It's awesome for teaching purposes, sample codes, tests and etc.

You can visit in detail docs in [FakeShopAPI](https://fake-shopapi.netlify.app) for more information.

## Why?

When I wanted to design a shopping website prototype and needed fake data, I had to
use lorem ipsum data or create a JSON file from the base. I didn't find any online free web service
to return semi-real shop data instead of lorem ipsum data.
so I decided to create this simple web service with NodeJs(express) and MongoDB as a database.

## Resources

There are 4 main resources need in shopping prototypes:

- Products http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products
- Carts http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/carts
- Users http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/users
- Auth http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/auth/login

## How to

you can fetch data with any kind of methods you know(fetch API, Axios, jquery ajax,...)

### Get all products

```js
[GET] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products")
```

### Get a single product

```js
[GET] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products/:id"
```

### Add new product

```js
[POST] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products"

       Body = {
                "name": "Test",
                "category": [
                    "clothing"
                ],
                "retail_price": 999,
                "discounted_price": 379,
                "images": [
                    "http://img5a.flixcart.com/image/short/u/4/a/altht-3p-21-alisha-38-original-imaeh2d5vm5zbtgg.jpeg"
                ],
                "description": "Key Features of Alisha Solid Women's      Cycling Shorts Cotton Lycra Navy, Red, Navy,     Specifications of Alisha Solid Women's Cycling      Shorts Shorts ",
                "product_rating": 4.5,
                "brand": "Alisha",
                "product_specifications": [
                    {
                        "key": "Number of Contents in Sales Package",
                        "value": "Pack of 3"
                    }
                ]}



/* will return
{
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
}
*/
```

### Updating a product

```js
[PATCH] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products/64d160a9ca0630131a60e7d7"

       Body = {
                "name": "Test Updated",
                }

/* will return
{
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
}
*/
```

Note: You not able to update all product. First you have to create your own Product to update it.

### Deleting a product

```js
[DELETE] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products/:id"
```

Note: You not able to delete all product. First you have to create your own Product to delete it.

### Sort and Limit

You can use query string to limit results or sort by price using \-\|\+ \(ascending or descending\)

```js
// Get 3 products sorted according to price in ascending order.

[GET] "http://fake-shop-api.ap-south-1.elasticbeanstalk.com/app/v1/products?limit=3&sort=price"
```

# All available routes

## Products

```js
fields:
{

    name: String,
    category: [String],
    price: Number,
    discounted_price: Number,
    images: [String],
    description: String,
    product_rating: Number,
    brand: String,
    product_specifications: [Object],

}
```

GET:

- /products (get all products)
- /products/:id (get specific product based on id)
- /products?limit=5 (limit return results )
- /products?sort=\-price \(\+\|\- get products in ascending or descending orders \(default to \+\(asc\) according to field\.\)\)
- /products?category=jewelery (get all products in specific category)
- /products?category=jewelery?sort=\-price \(\+\|\- get products in ascending or descending orders \(default is \+ \(asc\) according to field\.\)\)

POST:

- /products

PATCH

- /products/:id

-DELETE

- /products/:id

## Carts

```js
fields:
{
    userId: ObjectId,
    items: [
        {
            productId: ObjectId,
            name: String,
            price: Number,
            quantity: Number,
            image: String,
        }
    ],
    total: Number,
    created_at: Date,
    updated_at: Date
}
```

GET:

- /carts    (Get all carts)
- /carts/userId   ( get specific cart based on Userid)

POST:

- /carts  (Create and Add item to cart)

PATCH:

- /carts/:userId  (Update Item in Cart)

DELETE:

- /carts/userId  ( Delete Cart with specific userId)
- /carts/userId/productId  (Delete Item in from he cart)

## Users

```js
fields:
{

    name: String,
    email:String,
    photo: String,
    password: String,
    cpassword:String, // Confirm Password
    address: {
        street: String, // the user's street address
        city: String, // the user's city
        state: String, // the user's state
        postalCode: String, // the user's postal code
        country: String // the user's country
    },
    phone: String,
    passwordChangedAt: Date
}
```

GET:

- /users (get all users)
- /users/:id (get specific user based on id)
- /users?limit=5 (limit return results )
- /users?sort=desc \(asc\|desc get users in ascending or descending orders \(default to asc\)\)

POST:

- /users     ( Add User)

PUT,PATCH:

- /users/:id   (Update User)

DELETE:

- /users/:id   (Delete User)

## Auth

```js
fields:
{
    username:String,
    password:String
}
```

<br>
GET:

- /auth/profile  (Get  user with session)

```js
//header
{
    "Authorization":"Bearer <Token>"
}
```

POST:

- /auth/login   (Login)

## ToDo

- Order
- API key
