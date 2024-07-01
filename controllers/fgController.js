const FG = require('../models/fg');

// Get all FG records
exports.getAllFGs = async (req, res) => {
  try {
    const fgs = await FG.find();
    res.json(fgs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new FG
exports.createFG = async (req, res) => {
  const fg = new FG({
    recipeName: req.body.recipeName,
    TotalWeight: req.body.TotalWeight,
    ingredientsUsed: req.body.ingredientsUsed
  });

  try {
    const newFG = await fg.save();
    res.status(201).json(newFG);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update FG
exports.updateFG = async (req, res) => {
  try {
    const fg = await FG.findById(req.params.id);
    if (fg == null) {
      return res.status(404).json({ message: 'FG not found' });
    }

    if (req.body.recipeName != null) {
      fg.recipeName = req.body.recipeName;
    }
    if (req.body.TotalWeight != null) {
      fg.TotalWeight = req.body.TotalWeight;
    }
    if (req.body.ingredientsUsed != null) {
      fg.ingredientsUsed = req.body.ingredientsUsed;
    }

    const updatedFG = await fg.save();
    res.json(updatedFG);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete FG
exports.deleteFG = async (req, res) => {
  try {
    const fg = await FG.findById(req.params.id);
    if (fg == null) {
      return res.status(404).json({ message: 'FG not found' });
    }

    await fg.remove();
    res.json({ message: 'Deleted FG' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
