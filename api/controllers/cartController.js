// import cart Model
const  Cart = require("../models/cartModel");

// DEFINE CONTROLLER FUNCTIONS

// listofallitems function - To list all items
exports.listofallitems = (req, res) => {
Cart.find({}, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
};


// createNewcart function - To create new Cart
exports.addmoreitems = (req, res) => {
let  newCart = new Cart (req.body);
newCart.save((err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(cart);
});
};

 
 //Update cart
 exports.updateCart = (req, res) => {
    Cart.findOne({username:req.params.username}, req.body, { new:true }, (err, cart) => {
        Cart.findOneAndUpdate({productid:req.params.productid},req.body,{new:true},(err,cart) =>{
    if (err) {
    res.status(500).send(err);
    }
    res.status(200).json(cart);
    })
    });
    };

//delete product from the cart of a praticular user
    exports.deleteCart = async ( req, res) => {
        await  Cart.findOne({username:req.params.username},(err)=> {
            Cart.findOneAndDelete({productid:req.params.productid},(err)=> {
        console.log(req.params.username)   
        if (err) {
        return res.status(404).send(err);
        }
        res.status(200).json({ message:"Cart successfully deleted"});
        })
        });
        };
};

/*
 //updateCart function - To update Cart status by username
exports.updateCart = (req, res) => {
Cart.findOneAndUpdate({ username:req.params.username,productid:req.params.productid, }, req.body, { new:true }, (err, cart) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(cart);
});
 

// deleteCart function - To delete Cart by username
exports.deleteCart = async ( req, res) => {
await  Cart.deleteOne({ username:req.params.username,productid:req.params.productid, }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Cart successfully deleted"});
});
};
*/
