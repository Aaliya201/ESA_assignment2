'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const CartSchema = new Schema({
        productid:{
            type: Number,
            required:true
        },
        Category: {
            type:String,
            required:false
        },
        productName: {
            type:String,
            required:true
        },        
        quantity: {
            type:Number,
            required:true
        },        
        amount:{
            type:Number,
            required:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("cartModel", CartSchema);