const express = require("express");
const AwsModel = require("../model/AwsModel");

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

router.get("/aws", async (req, res) => {
  try {
    const aws = await AwsModel.find();
    res.json(aws);
  } catch (err) {
    console.log({ massage: err });
  }
});

module.exports = router;
