const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, unique: true },
    clientId: {
      type: String,
      required: true,
    },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: Number, required: true, unique: false },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Client || mongoose.model("Client", clientSchema);
