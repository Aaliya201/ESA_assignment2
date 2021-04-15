// import cart Model
const  Cart = require("../models/cartModel");

// DEFINE CONTROLLER FUNCTIONS

// listofallitems function - To list all users
exports.listofallitems = (req, res) => {
Cart.find({}, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
};


// createNewcart function - To create new user
exports.addmoreitems = (req, res) => {
let  newCart = new Cart (req.body);
newCart.save((err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(cart);
});
};

 //updateCart function - To update user status by id
exports.updateCart = (req, res) => {
Cart.findOneAndUpdate({ username:req.params.username,productid:req.params.productid, }, req.body, { new:true }, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
};

// deleteCart function - To delete user by userid
exports.deleteCart = async ( req, res) => {
await  Cart.deleteOne({ username:req.params.username,productid:req.params.productid, }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Cart successfully deleted"});
});
};