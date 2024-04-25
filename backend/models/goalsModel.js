const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var goalSchema = new mongoose.Schema(
  {
    text: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Goal", goalSchema);
