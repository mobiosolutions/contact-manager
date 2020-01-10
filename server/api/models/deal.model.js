const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dealSchema = new Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  associate_with: {
    company_id: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Company"
      }
    ],
    contact_id: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Contact"
      }
    ]
  },
  status_name: {
    type: String,
    default: "",
    required: true
  },
  closing_date: {
    type: Date,
    default: new Date()
  },
  deal_owner_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  deal_value: {
    type: Number,
    default: 0
  },
  description: {
    type: String
  },
  tags: [
    {
      type: String
    }
  ],
  is_deleted: {
    type: Boolean,
    default: false
  },
  status: {
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

module.exports = mongoose.model("Deal", dealSchema);
