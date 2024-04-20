const professionalModel = require("../models/professionalDetails");

module.exports.getProfDetails = async (req, res) => {
  try {
    const { companyName } = req.params;
    console.log(companyName);
    const decodedCompanyName = decodeURIComponent(companyName);
    const professional = await professionalModel.findOne({ companyname: decodedCompanyName });
    if (!professional) {
      return res.status(404).json({ message: 'Professional not found' });
    }
    res.json(professional);
    console.log(professional);
  } catch (error) {
    console.error('Error fetching professional data:', error);
    res.status(500).json({ message: 'Error fetching professional data' });
  }
};
