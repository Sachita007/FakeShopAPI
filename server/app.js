const express = require('express');
const app = express();
const productController = require("./controllers/productController")
const globalErrorHandler = require('./controllers/errorController')
const productRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")
const cartRouter = require("./routes/cartRouter")




app.use(express.json());


app.use("/app/v1/products", productRouter)


app.use("/app/v1/users", userRouter)

app.use("/app/v1/carts", cartRouter)


// // get all product
// app.get("/app/v1/product", productController.getAllProduct)

// //get product by id (one product)
// app.get("/app/v1/product/:id", productController.getProduct)

// // add product
// app.post("/app/v1/product", productController.addProduct)

// // update product
// app.patch("/app/v1/product/:id", productController.updateProduct)
// // delete product 
// app.delete("/app/v1/product/:id", productController.deleteProduct)
app.use(globalErrorHandler)

module.exports = app
