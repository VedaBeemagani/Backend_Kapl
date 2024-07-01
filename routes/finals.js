const express = require('express');
const router = express.Router();
const finalProductController = require('../controllers/finalController');

// Create new final product
router.route('/').post(finalProductController.createFinalProduct);

// Get all final products
router.route('/').get(finalProductController.getAllFinalProducts);

// Get final product by recipeName
router.route('/:name').get(finalProductController.getFinalProductByRecipeName);

// Update a final product by recipeName
router.route('/:id').patch(finalProductController.updateFinalProduct);

// Delete a final product by recipeName
router.route('/:name').delete(finalProductController.deleteFinalProduct);

module.exports = router;
