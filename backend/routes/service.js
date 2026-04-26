import express from "express";
import { createService, getServices, getServiceById } from "../controllers/serviceController.js";

const router = express.Router();

router.post("/", createService);
router.get("/", getServices);
router.get("/:id", getServiceById);  // 👈 add this

export default router;