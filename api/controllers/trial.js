import Trial from "../models/Trial.js";
import { createError } from "../utils/error.js";

export const createTrial = async (req, res, next) => {
  const newTrial = new Trial(req.body);

  try {
    const savedTrial = await newTrial.save();
    res.status(200).json(savedTrial);
  } catch (err) {
    next(err);
  }
}

export const updateTrial = async (req, res, next) => {
  try {
    const updatedTrial = await Trial.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updatedTrial)
  } catch (err) {
    next(err);
  }
}


export const getTrials = async (req, res, next) => {
  try {
    const trials = await Trial.find();
    res.status(200).json(trials)
  } catch (err) {
    next(err);
  }
}
