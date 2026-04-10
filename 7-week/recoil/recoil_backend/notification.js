const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema(
  {
    network: {
      type: Number,
      default: 0,
    },
    jobs: {
      type: Number,
      default: 0,
    },
    messaging: {
      type: Number,
      default: 0,
    },
    notifications: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
