const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    transaction: {
      type: String,
      required: true,
      enum: ["Income", "Expense"],
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const transactionsModel = mongoose.model("transactions", transactionSchema);

module.exports = transactionsModel;
