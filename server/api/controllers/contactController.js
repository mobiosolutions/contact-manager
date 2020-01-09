/* This file is handle all contact routes */

/* load all require model */
const Contact = require("../models/contact.model");

/* get all contact */
exports.getAllContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (contacts.length < 1) {
      return res.status(404).json({ message: "No contact found." });
    }
    res.status(200).json({ message: "contacts details", data: contacts });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* get contact by its id */
exports.getContactById = async (req, res) => {
  try {
    const { contactId } = req.params;
    if (!contactId) {
      return res.status(204).json({ message: "Please send contact id" });
    }
    const contact = await Contact.findById(contactId);
    if (!contact) {
      return res.status(404).json({ message: "No contact detail found." });
    }
    res.status(200).json({ message: "contact detail", data: contact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* create new contact */
exports.createContact = async (req, res) => {
  try {
    const { name, company_id } = req.body;

    if (req.user) {
      req.body.user_id = req.user._id;
    }

    /* user exists or not */
    const existedContact = await Contact.findOne({
      $and: [{ name: name }, { company_id: company_id }]
    });

    /* if user already exist with name and company */
    if (existedContact) {
      return res.status(409).json({ message: "Contact already exist" });
    }
    const contact = await Contact.create(req.body);
    res
      .status(200)
      .json({ message: "Contact created successfully", data: contact });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* update contact by id */
exports.updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    req.body.updated_at = new Date().toISOString();
    const updatedContact = await Contact.findOneAndUpdate(
      { _id: contactId },
      { $set: req.body },
      { new: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found." });
    }
    res.status(200).json({
      data: updatedContact,
      message: "Contact updated successfully."
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* delete contact by id */

exports.deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    /* contact which "is_deleted:false" will be null here */
    const contact = await Contact.findOne({
      _id: contactId,
      is_deleted: false
    });
    if (!contact) {
      return res.status(404).json({ message: "Contact not found." });
    }
    /* Update is_deleted flag to true for delete contact */
    await Contact.findOneAndUpdate(
      { _id: contactId },
      { $set: { is_deleted: true } },
      { new: true }
    );

    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
