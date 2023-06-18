const { default: mongoose } = require("mongoose");

const AppDataSchema = new mongoose.Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { strict: false }
);

module.exports = mongoose.model("AppData", AppDataSchema);
