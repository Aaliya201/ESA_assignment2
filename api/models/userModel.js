'use strict';
// Import mongoose
    const mongoose = require("mongoose");

// Declare schema and assign Schema class
    const Schema = mongoose.Schema;

// Create Schema Instance and add schema propertise
    const UserSchema = new Schema({
        userid:{
            type: Number,
            required:true
        },
        username: {
            type:String,
            required:true,
            unique:true
        },
        createdOn: {
            type:Date,
            default:Date.now
        }
    });

// create and export model
module.exports = mongoose.model("userModel", UserSchema);