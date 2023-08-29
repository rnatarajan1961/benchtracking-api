const moment = require("moment");
var Consultant = require("../models/Consultants");

exports.getList = async (query, page, limit) => {
  try {
    return await Consultant.find(query);
  } catch (err) {
    throw Error("Error while Paginating Consultant List");
  }
};

exports.getById = async (query) => {
  try {
    return await Consultant.findById(query);
  } catch (err) {
    throw Error("Error while getting Consultant By ID");
  }
};

exports.create = async (req, res) => {
  console.log("date:", req.body.lastUtilDate);
  const consultant = new Consultant({
    employeeNumber: req.body.employeeNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    displayName: req.body.displayName,
    jobTitle: req.body.jobTitle,
    businessUnit: req.body.businessUnit,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    phoneType: req.body.phoneType,
    gender: req.body.gender,
    isPermanent: req.body.isPermanent,
    skillSet: req.body.skillSet,
    lastUtilDate: req.body.lastUtilDate,
    comments: req.body.comments,
    resumeLink: req.body.resumeLink,
    status: req.body.status,
  });

  try {
    res.json(await consultant.save());
  } catch (err) {
    res.json({ message: err });
  }
};

exports.update = async (req, res) => {
  try {
    console.log("Updating consultant info for " + req.params.consultantId);
    const resp = await Consultant.updateOne(
      { _id: req.params.consultantId },
      {
        $set: {
          employeeNumber: req.body.employeeNumber,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          displayName: req.body.displayName,
          jobTitle: req.body.jobTitle,
          businessUnit: req.body.businessUnit,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          phoneType: req.body.phoneType,
          gender: req.body.gender,
          isPermanent: req.body.isPermanent,
          skillSet: req.body.skillSet,
          lastUtilDate: req.body.lastUtilDate,
          comments: req.body.comments,
          resumeLink: req.body.resumeLink,
          status: req.body.status,
        },
      }
    );
    if ((resp.matchedCount = 1)) res.status(200).json("Update successful");
  } catch (err) {
    res.json({ message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    console.log("Removing consultant info for " + req.params.consultantId);
    const deletedData = await Consultant.findById(req.params.consultantId);
    const resp = await Consultant.deleteOne({ _id: req.params.consultantId });
    if (resp.deletedCount == 0)
      res.status(404).json("Deletion not performed.  Invalid id specified");
    else res.status(200).json(deletedData);
  } catch (err) {
    res.json({ message: err });
  }
};
