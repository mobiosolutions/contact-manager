const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  user_id: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    default: "",
    required: true
  },
  website_url: {
    type: String,
    default: "",
    required: true
  },
  description: {
    type: String
  },
  company_image: {
    type: String
  },
  phone_no: {
    type: Number
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
    billing_address: {
      billing_street: String,
      billing_city: String,
      billing_state: String,
      billing_country: String,
      billing_zipCode: Number
    },
    shipping_address: {
      shipping_street: String,
      shipping_city: String,
      shipping_state: String,
      shipping_country: String,
      shipping_zipCode: Number
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

module.exports = mongoose.model("Company", companySchema);
