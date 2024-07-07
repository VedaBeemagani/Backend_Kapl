const mongoose = require('mongoose');

const packageLogSchema = new mongoose.Schema({
  recipeName: { type: String, required: true, lowercase: true },
  TotalWeight: { type: Number, required: true },
  batchcode: { type: String, required: false },
  approved: { type: Boolean, required: true, default: false }
});

packageLogSchema.pre('save', function(next) {
  this.recipeName = this.name.trim();
  next();
});

module.exports = mongoose.model('PackageLog', packageLogSchema);
