const mongoose = require("mongoose");

const CloudSchema = mongoose.Schema({
  Cloudname: { type: String, required: true },
});

module.exports = mongoose.model("Cloud", CloudSchema);
