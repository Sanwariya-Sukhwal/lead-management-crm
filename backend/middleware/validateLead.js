const validateLead = (req, res, next) => {
  const {
    name,
    email,
    phone
  } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "Name, Email and Phone are required"
    });
  }

  next();
};

module.exports = validateLead;