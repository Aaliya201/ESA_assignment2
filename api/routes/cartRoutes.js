'use strict';

// create App function
    module.exports = function(app) {
        var cartlist = require('../controllers/cartController');

// cartList Routes

// get and post request for /todos endpoints
        app
        .route("/rest/v1/users/:username/cart")
        .get(cartlist.listofallitems)
        .post(cartlist.addmoreitems);
    
//  put and delete request for Users endpoints
        app
        .route("/rest/v1/users/:username/cart/:productid")
        .put(cartlist.updateCart)
        .delete(cartlist.deleteCart);
    };