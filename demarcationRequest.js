const mongoose = require('mongoose');

const demarcationSchema = new mongoose.Schema({
  name: String,
  aadhaarNumber: String,
  landNumber: String,
  khataNumber: String,
  area: String,
  complaintType: String,
  description: String
});

module.exports = mongoose.model('DemarcationRequest', demarcationSchema);
