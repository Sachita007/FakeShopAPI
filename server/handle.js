
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const Product = require("./models/productModel")
const fs = require('fs');



main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/FakeShop").then(() => {
        console.log("Connected")
    })


}



fs.readFile("./product.json", "utf8", async (err, data) => {
    product = JSON.parse(data)
    pro = product[1].product_category_tree[0].split(">>")
    specifi = product[1].product_specifications.product_specification

    for (const type of product) {




        specification = type.product_specifications?.product_specification


        await Product.create({

            name: type.product_name,
            category: type.product_category_tree[0].toLowerCase().split(">>").map(x => x.trim()),
            price: type.retail_price,
            discounted_price: type.discounted_price,
            images: type.image,
            description: type.description,
            brand: type.brand,
            product_specifications: specification
        })

    }
})