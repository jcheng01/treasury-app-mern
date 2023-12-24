const express = require("express"); //how you import express to file
const signup = require("../controllers/users/signup"); //import each module
const signin = require("../controllers/users/signin"); //import each module

const userRoutes = express.Router();

//Routess..
userRoutes.post("/signup", signup);
userRoutes.post("/signin");

module.exports = userRoutes;
