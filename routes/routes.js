const express = require("express");
const CloudModel = require("../model/CloudModel");

const router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//get data

router.get("/", async (req, res) => {
  try {
    const cloud = await CloudModel.find();
    res.json(cloud);
  } catch (err) {
    console.log({ massage: err });
  }
});

module.exports = router;
