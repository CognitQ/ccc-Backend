const mongoose = require("mongoose");

const AwsSchema = mongoose.Schema({
  Awsname: { type: String, required: true },
});

module.exports = mongoose.model("Aws", AwsSchema);
