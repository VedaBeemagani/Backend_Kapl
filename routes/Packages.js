const express = require('express');
const router = express.Router();
const packageController = require('../controllers/PackageController');

// Get all Packages
router.get('/', packageController.getAllPackages);

// Get Package by ID
router.get('/:id', packageController.getPackageById);

// Create new Package
router.post('/', packageController.createPackage);

// Update Package
router.put('/:id', packageController.updatePackage);

// Delete Package
router.delete('/:id', packageController.deletePackage);

module.exports = router;
