const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  company_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Company"
  },
  contact_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Contact"
  },
  deal_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Deal"
  },
  task_id: {
    type: mongoose.Schema.ObjectId,
    ref: "Task"
  },
  text: {
    type: String
  },
  is_deleted: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    default: new Date()
  },
  updated_at: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("Note", noteSchema);
