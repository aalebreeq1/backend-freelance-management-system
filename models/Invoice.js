const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: Number,
      required: true,
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    paymentStatus: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
