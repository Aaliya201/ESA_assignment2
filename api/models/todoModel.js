'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const TodoSchema = new Schema({
        productid:{
            type: Number,
            required:true
        },
        Category: {
            type:String,
            required:true
        },
        productName: {
            type:String,
            required:true
        },
        ProductModel: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        
        availablequantity:{
            type:Number,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("todoModel", TodoSchema);