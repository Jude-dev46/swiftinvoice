const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    clientName: { type: String, required: true, unique: true },
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: Number, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Client || mongoose.model("Client", clientSchema);
