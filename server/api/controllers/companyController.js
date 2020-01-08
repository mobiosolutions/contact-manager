const Company = require("../models/company.model");

/*  get all companies */
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();

    if (companies.length < 1) {
      return res.status(404).json({
        message: "No company data found"
      });
    }

    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* create new company */
exports.createCompany = async (req, res) => {
  try {
    const data = req.body;

    /* check company already exist or not by name */
    const existedCompany = await Company.findOne({ name: data.name });

    if (existedCompany) {
      return res.status(409).json({
        message: "Company Name already exist."
      });
    }

    /* if company not exist it creates the new company */
    if (req.user) {
      data.user_id = req.user._id;
    }
    const companyData = new Company(req.body);
    const company = await companyData.save();

    res.status(200).json({ company: company });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });

  }
};

/* find company by its id */
exports.getCompanyById = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found."
      });
    }
    res.status(200).json({ company: company });
  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

/* update company  */
exports.updateCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    req.body.updated_at = new Date().toISOString();
    const updatedCompany = await Company.findOneAndUpdate(
      { _id: companyId },
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ company: updatedCompany });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* delete company */
exports.deleteCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    /* company which "is_deleted:false" will be null here */
    const company = await Company.findOne({
      _id: companyId,
      is_deleted: false
    });
    if (!company) {
      return res.status(404).json({ message: "Company not found." });
    }
    /* Update is_deleted flag to true for delete company */
    await Company.findOneAndUpdate(
      { _id: companyId },
      { $set: { is_deleted: true } },
      { new: true }
    );

    res.status(200).json({ message: "Company deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
