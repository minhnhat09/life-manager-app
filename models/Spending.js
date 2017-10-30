const mongoose = require("mongoose");
const { Schema } = mongoose;

const spendingSchema = new Schema({
  name: String,
  amount: { type: Number, default: 0 },
  type: String,
  date: Date,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

mongoose.model("spendings", spendingSchema);
