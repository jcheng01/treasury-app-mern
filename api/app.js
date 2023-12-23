require("express-async-errors"); //express has no middleware to handle errors, typically done all errors handled in each controller

const express = require("express"); //import the express framwork for node
const app = express(); //creates the instance of the obj
const mongoose = require("mongoose"); //import the db
const errorHandler = require("./handlers/error.handler"); //import the error middleware to catch errors from any routes
require("dotenv").config(); //make env variables availible

mongoose
  .connect(process.env.MONGO, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

//Models
require("./models/users.models");
require("./models/transactions.model");

//Routes
const usersRoutes = require("./routes/users.routes");
const transactionsRoutes = require("./routes/transactions.routes");
app.use("/api/users", usersRoutes);
app.use("/api/transactions", transactionsRoutes);

//end of all routes
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "page not found",
  });
});

app.use(errorHandler);

app.listen(5173, () => {
  console.log(`Server started on port 5173`);
});
