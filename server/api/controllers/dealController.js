/* This file contains all deal routes */

/* load all require models */
const Deal = require("../models/deal.model");

/* get all deals */
exports.getAllDeal = async (req, res) => {
  try {
    const deals = await Deal.find();

    if (deals.length < 1) {
      return res.status(404).json({
        message: "No Deal data found."
      });
    }

    res.status(200).json({ message: "Deal details", data: deals });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* get deal by its id */
exports.getDealById = async (req, res) => {
  try {
    const { dealId } = req.params;
    if (!dealId) {
      return res.status(204).json({ message: "Please send deal id" });
    }
    const deal = await Deal.findById(dealId);
    if (!deal) {
      return res.status(404).json({ message: "No deal detail found." });
    }
    res.status(200).json({ message: "deal detail", data: deal });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* create new deal */
exports.createDeal = async (req, res) => {
  try {
    const { name, company_id } = req.body;

    if (req.user) {
      req.body.user_id = req.user._id;
    }

    /* user exists or not */
    const existedDeal = await Deal.findOne({
      $and: [{ name: name }, { company_id: company_id }]
    });

    /* if user already exist with name and company */
    if (existedDeal) {
      return res.status(409).json({ message: "Deal already exist" });
    }
    const deal = await Deal.create(req.body);
    res.status(200).json({ message: "Deal created successfully", data: deal });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* update deal by its id */
exports.updateDeal = async (req, res) => {
  try {
    const { dealId } = req.params;
    req.body.updated_at = new Date().toISOString();
    const updatedDeal = await Deal.findOneAndUpdate(
      { _id: dealId },
      { $set: req.body },
      { new: true }
    );
    if (!updatedDeal) {
      return res.status(404).json({ message: "Deal not found." });
    }
    res.status(200).json({
      data: updatedDeal,
      message: "Deal updated successfully."
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* delete deal by its id */
exports.deleteDeal = async (req, res) => {
  try {
    const { dealId } = req.params;
    /* deal which "is_deleted:false" will be null here */
    const deal = await Deal.findOne({
      _id: dealId,
      is_deleted: false
    });
    if (!deal) {
      return res.status(404).json({ message: "Deal not found." });
    }
    /* Update is_deleted flag to true for delete deal */
    await Deal.findOneAndUpdate(
      { _id: dealId },
      { $set: { is_deleted: true } },
      { new: true }
    );

    res.status(200).json({ message: "Deal deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
