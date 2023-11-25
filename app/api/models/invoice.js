const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoiceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    overdue: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.Invoice || mongoose.model("Invoice", invoiceSchema);
