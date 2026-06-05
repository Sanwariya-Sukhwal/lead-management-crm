const express = require("express");

const {
  createLead,
  getAllLeads,
  getLeadById,
  updateLead,
  deleteLead,
  searchLeads,
  getLeadStats
} = require("../controllers/leadController");

const validateLead = require("../middleware/validateLead");

const router = express.Router();

// Statistics
router.get("/stats", getLeadStats);

// Search
router.get("/search", searchLeads);

// Get All Leads
router.get("/", getAllLeads);

// Get Lead By Id
router.get("/:id", getLeadById);

// Create Lead
router.post("/", validateLead, createLead);

// Update Lead
router.put("/:id", validateLead, updateLead);

// Delete Lead
router.delete("/:id", deleteLead);

module.exports = router;