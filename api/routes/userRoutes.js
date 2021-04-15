'use strict';

// create App function
    module.exports = function(app) {
        var userlist = require('../controllers/userController');

// todoList Routes

// get and post request for /todos endpoints
        app
        .route("/rest/v1/users")
        .get(userlist.listofallusers)
        .post(userlist.createNewuser);
    
//  put and delete request for Users endpoints
        app
        .route("/rest/v1/users/:username")
        .put(userlist.updateUser)
        .delete(userlist.deleteUser);
    };
    