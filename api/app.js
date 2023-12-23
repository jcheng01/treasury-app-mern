require("express-async-errors"); //express has no middleware to handle errors, typically done all errors handled in each controller

const express = require("express"); //import the express framwork for node
const app = express(); //creates the instance of the obj
const mongoose = require("mongoose"); //import the db
const errorHandler = require("./handlers/error.handler"); //import the error middleware to catch errors from any routes
require("dotenv").config(); //make env variables availible
