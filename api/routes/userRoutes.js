'use strict';

// create App function
    module.exports = function(app) {
        var userlist = require('../controllers/userController');

// User Routes

// get and post request for Users
        app
        .route("/rest/v1/users")
        .get(userlist.listofallusers)
        .post(userlist.createNewuser);
    
//  put and delete request for Users
        app
        .route("/rest/v1/users/:username")
        .put(userlist.updateUser)
        .delete(userlist.deleteUser);
    };
    
