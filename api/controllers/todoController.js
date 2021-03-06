// import Todo Model
const  Todo = require("../models/todoModel");

// DEFINE CONTROLLER FUNCTIONS

// listAllTodos function - To list all products(GET)
exports.listAllTodos = (req, res) => {
Todo.find({}, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};


// createNewTodo function - To create new Product(post)
exports.createNewTodo = (req, res) => {
let  newTodo = new Todo (req.body);
newTodo.save((err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(201).json(todo);
});
};

// updateTodo function - To update Products by productid
exports.updateTodo = (req, res) => {
Todo.findOneAndUpdate({ productid:req.params.productid }, req.body, { new:true }, (err, todo) => {
if (err) {
res.status(500).send(err);
}
res.status(200).json(todo);
});
};

// deleteTodo function - To delete product by productid
exports.deleteTodo = async ( req, res) => {
await  Todo.deleteOne({ productid:req.params.productid }, (err) => {
if (err) {
return res.status(404).send(err);
}
res.status(200).json({ message:"Product successfully deleted"});
});
};
