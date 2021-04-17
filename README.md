# ESA Assignment-2 (Cart Microservice)
This assignment tasks the students to create an e-commerce microservice which has three components. Users, Products and Cart. These three components are coded seperately using the controller-route-models hieracrchy. The user interacts with the products provided and adds it tothe cart. The code is viewed from the admin view and is in control of adding new products, users and inspecting/updating and deleting their carts.

## Getting Started

Download the repository and run ```npm init``` and ```npm install``` to run the necessary prerequisites

## Assignment Structure

API:<br>
1) controllers (to add functionality for each of User/Product/Cart)<br>
2) routes (to add routes for each of User/Product/Cart) <br>
3) models (to create and define schema for each of User/Product/Cart) <br>


## Setting up
To get started with the code, you will have to add your MongoDB URI link in ```config/db.js```.
An example of the URI link would be "/mongodb+srv://aaliya:<password>@cluster0.0tp8a.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  where aaliya is the username, password is your mongoDB atlas account password and myfirstDatabase would be the database you have created for the project.

Another thing to take note of is whitelisting your IP address to connect with the database. This can be done by doing to Network Access tab> click on Add IP adress> Add curret IP address


### Running the code

Run the server

```
> ESA_assignment2# node server.js
```

Output :

```
the options [useUnifiedTopology] is not supported
Server running at http://localhost:7000/
Database connection established!
```

##Microservice Calls
Please refer to the routes folder to see the appropriate routes to call the microservices. 




## Tools used

* [Node.Js](https://nodejs.org/en/) - The web framework used
* [MongoDb Atlas](https://www.mongodb.com/cloud/atlas) - Database Management

