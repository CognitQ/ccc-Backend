require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 7000;
const app = express();

app.use(express.json());

//cofig routes
const allRoutes = require("./routes/routes");
app.use(allRoutes);

//db connection
mongoose
  .connect("mongodb://localhost:27017/CCC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection is successful");
  })
  .catch((e) => {
    console.log("not connected");
  });

app.listen(process.env.PORT, () => {
  console.log(`Connected with ${process.env.PORT}`);
});
