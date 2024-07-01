const FinalProduct = require('../models/Final');
const Recipe = require('../models/Recipe');

// Create new final product
const createFinalProduct = async (req, res) => {
    try {
      const finalProduct = new FinalProduct(req.body);
      await finalProduct.save();
      res.status(201).json(finalProduct);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };  

// Get all final products
const getAllFinalProducts = async (req, res) => {
  try {
    const { approved } = req.query;
    let filter = {};
    if ( approved === 'true' || approved === 'false' ){
      filter.approved = approved === 'true';
    }
    const finalProducts = await FinalProduct.find(filter);
    res.status(200).json(finalProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get final product by recipeName
const getFinalProductByRecipeName = async (req, res) => {
  try {
    const { name } = req.params;
    const finalProduct = await FinalProduct.findOne({ recipeName: name });
    if (!finalProduct) {
      return res.status(404).json({ message: 'Final product not found for this recipe.' });
    }
    res.status(200).json(finalProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a final product by recipeName
const updateFinalProduct = async (req, res) => {
  try {
    const finalProduct = await FinalProduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!finalProduct) {
      return res.status(404).json({ message: 'Final product not found' });
    }
    res.status(200).json(finalProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a final product by recipeName
const deleteFinalProduct = async (req, res) => {
  try {
    const { name } = req.params;
    await FinalProduct.findOneAndDelete({ recipeName: name });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFinalProduct,
  getAllFinalProducts,
  getFinalProductByRecipeName,
  updateFinalProduct,
  deleteFinalProduct,
};
