const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  category: { type: String, require: true },
  description: { type: String, required: true },
  ingredients: [
    {
      ingredient: { type: String, required: true, lowercase: true }, // Storing ingredient name directly
      quantity: { type: Number, required: true }
    }
  ],
  preparationNotes: { type: String, required: true },
  maxServings: { type: Number, required: true },
  totalWeight: { type: Number, required: true }
});

recipeSchema.pre('save', function(next) {
  this.name = this.name.trim();
  next();
});

module.exports = mongoose.model('Recipe', recipeSchema);

