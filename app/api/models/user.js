const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    businessName: { type: String, required: true, unique: true },
    businessField: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    refreshToken: { type: String, required: false, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
