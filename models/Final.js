const mongoose = require('mongoose');

const finalProductSchema = new mongoose.Schema({
  recipeName: { type: String, required: true },
  finalWeight: { type: Number, required: true },
  ingredientsUsed: [
    {
      ingredientName: { type: String, required: true },
      weight: { type: Number, required: true }
    }
  ],
  approved: { type: Boolean, default: false, required: false },
});

module.exports = mongoose.model('Final', finalProductSchema);
