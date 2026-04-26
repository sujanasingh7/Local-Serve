import Service from "../models/Service.js";

// CREATE SERVICE
export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL SERVICES
export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
    if (!service) return res.status(404).json({ message: "Service not found" })
    res.json(service)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};