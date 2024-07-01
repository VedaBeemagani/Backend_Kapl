const express = require('express');
const router = express.Router();
const ingredientController = require('../controllers/ingredientController');

// Debugging line
//console.log('ingredientController:', ingredientController);
//console.log('createIngredient:', ingredientController.createIngredient);

// Use the correct path to the controller function
router.route('/').post(ingredientController.createOrUpdateIngredient);
router.route('/').get(ingredientController.getAllIngredients);
router.route('/:name').get(ingredientController.getIngredientByName);
//router.get('/ingredients/name/:name', ingredientController.getIngredientByName);
router.route('/:name').patch( ingredientController.updateIngredientByName);
router.route('/:name').delete(ingredientController.deleteIngredientByName);

// Additional routes for CRUD operations

module.exports = router;

