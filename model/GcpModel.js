const mongoose = require("mongoose");

const GcpSchema = mongoose.Schema({
  Gcpname: { type: String, required: true },
});

module.exports = mongoose.model("Gcp", GcpSchema);
