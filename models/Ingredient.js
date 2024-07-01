const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true },
  category: { type: String, required: true, lowercase: true },
  quantity: { type: Number, required: false, default: 0 },
  moisture_loss: { type: Number, required: true },
  Energy_KCal: { type: Number, required: true },
  sodium: { type: Number, required: true },
  carbohydrate: { type: Number, required: true },
  dietary_fibre: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  sat_fat: { type: Number, required: true },
  trans_fat: { type: Number, required: true },
  cholesterol: { type: Number, required: true },
  potassium: { type: Number, required: true },
  total_sugar: { type: Number, required: true },
  added_sugar: { type: Number, required: true },
  vitamin_D: { type: Number, required: true },
  calcium: { type: Number, required: true },
  iron: { type: Number, required: true }
});

// Pre-save hook to trim spaces from the name
ingredientSchema.pre('save', function(next) {
  this.name = this.name.trim();
  next();
});

module.exports = mongoose.model('Ingredient', ingredientSchema);
