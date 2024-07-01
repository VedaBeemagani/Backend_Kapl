const Ingredient = require('../models/Ingredient');

// Create a new ingredient or update if exists
exports.createOrUpdateIngredient = async (req, res) => {
  try {
    const ingredientData = req.body;
    ingredientData.name = ingredientData.name.trim();

    const existingIngredient = await Ingredient.findOne({ name: ingredientData.name });
    if (existingIngredient) {
      Object.assign(existingIngredient, ingredientData);
      await existingIngredient.save();
      return res.status(200).send(existingIngredient);
    } else {
      const ingredient = new Ingredient(ingredientData);
      await ingredient.save();
      return res.status(201).send(ingredient);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get a specific ingredient by name
exports.getIngredientByName = async (req, res) => {
  try {
    const name = req.params.name.trim();
    const ingredient = await Ingredient.findOne({ name });
    if (!ingredient) {
      return res.status(404).send({ error: 'Ingredient not found' });
    }
    res.status(200).send(ingredient);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a specific ingredient by name
exports.updateIngredientByName = async (req, res) => {
  try {
    const name = req.params.name.trim();
    const updateData = req.body;
    updateData.name = updateData.name ? updateData.name.trim() : updateData.name;

    const ingredient = await Ingredient.findOneAndUpdate({ name }, updateData, { new: true, runValidators: true });
    if (!ingredient) {
      return res.status(404).send({ error: 'Ingredient not found' });
    }
    res.status(200).send(ingredient);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a specific ingredient by name
exports.deleteIngredientByName = async (req, res) => {
  try {
    const name = req.params.name.trim();
    const ingredient = await Ingredient.findOneAndDelete({ name });
    if (!ingredient) {
      return res.status(404).send({ error: 'Ingredient not found' });
    }
    res.status(200).send({ message: 'Ingredient deleted successfully' });
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all ingredients
exports.getAllIngredients = async (req, res) => {
    try {
      const ingredients = await Ingredient.find({});
      res.status(200).send(ingredients);
    } catch (error) {
      res.status(500).send(error);
    }
  };