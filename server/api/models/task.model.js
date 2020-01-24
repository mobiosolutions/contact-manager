const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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
    ],
    deal_id: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Deal"
      }
    ]
  },
  status_name: {
    type: String,
    default: "",
    required: true
  },

  task_date: {
    type: Date,
    default: new Date()
  },
  date_time: {
    type: Date,
    default: new Date()
  },
  task_owner_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    default: ""
  },
  priority: {
    type: String
  },
  reminder: {
    remind_date: Date,
    remind_hours: Number,
    remind_min: Number,
    remind_meridiem: String
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

module.exports = mongoose.model("Task", taskSchema);
