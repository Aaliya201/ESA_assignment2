// import Todo Model
const  User = require("../models/userModel");

// DEFINE CONTROLLER FUNCTIONS

// listofallusers function - To list all users
exports.listofallusers = (req, res) => {
User.find({}, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};


// createNewuser function - To create new user
exports.createNewuser = (req, res) => {
let  newUser = new User (req.body);
newUser.save((err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(user);
});
};

 //updateUser function - To update user status by id
exports.updateUser = (req, res) => {
User.findOneAndUpdate({ username:req.params.username }, req.body, { new:true }, (err, user) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(user);
});
};

// deleteUser function - To delete user by userid
exports.deleteUser = async ( req, res) => {
await  User.deleteOne({ username:req.params.username }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"User successfully deleted"});
});
};