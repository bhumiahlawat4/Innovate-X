const State = require("../models/State");

// ✅ Get all states
exports.getStates = async (req, res) => {
  try {
    const states = await State.findAll();
    res.status(200).json(states);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Create a new state
exports.createState = async (req, res) => {
  try {
    const state = await State.create(req.body);
    res.status(201).json(state);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
