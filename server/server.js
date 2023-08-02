const express = require('express');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;


mongoose.set('strictQuery', false);


// Wait for database to connect, logging an error if there is a problem 
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGODB_SERVER_LINK).then(() => {
        console.log("Connected")
    })
}




app.listen(port, () => {
    console.log(`App running on port: ${port}`)
})