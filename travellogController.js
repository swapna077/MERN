import TravelLog from "../models/TravelLog.js";

export const getLogs = async (req, res) => {
  try {
    const logs = await TravelLog.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createLog = async (req, res) => {
  const newLog = new TravelLog(req.body);
  try {
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
