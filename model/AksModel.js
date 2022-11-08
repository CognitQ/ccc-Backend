const mongoose = require("mongoose");

const AksSchema = mongoose.Schema({
  Aksname: { type: String, required: true },
});

module.exports = mongoose.model("Aks", AksSchema);
