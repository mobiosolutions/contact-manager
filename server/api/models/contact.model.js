const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  title: {
    type: String,
    default: ""
  },
  company_id: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Company"
    }
  ],
  description: {
    type: String
  },
  contact_image: {
    type: String
  },
  contact_info: {
    email: String,
    work_phone: Number,
    phone_no: Number,
    home_phone: Number
  },
  tags: [
    {
      type: String
    }
  ],
  fax: {
    type: Number
  },
  address: {
    mailing_address: {
      mailing_street: String,
      mailing_city: String,
      mailing_state: String,
      mailing_country: String,
      mailing_zipCode: Number
    }
  },
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

module.exports = mongoose.model("Contact", contactSchema);
