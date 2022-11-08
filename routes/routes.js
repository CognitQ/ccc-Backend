const express = require("express");
const AwsModel = require("../model/AwsModel");
const GcpModel = require("../model/GcpModel");
const AksModel = require("../model/AksModel");

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

router.get("/gcp", async (req, res) => {
  try {
    const gcp = await GcpModel.find();
    res.json(gcp);
  } catch (err) {
    console.log({ massage: err });
  }
});

router.get("/aks", async (req, res) => {
  try {
    const aks = await AksModel.find();
    res.json(aks);
  } catch (err) {
    console.log({ massage: err });
  }
});

module.exports = router;
