const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");
require("dotenv").config();
const Notification = require("./notification");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/api/notifications", async (req, res) => {
  try {
    let data = await Notification.findOne();

    if (!data) {
      data = await Notification.create({});
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post("/api/notifications", async (req, res) => {
  try {
    const { network, jobs, messaging, notifications } = req.body;

    let data = await Notification.findOne();

    if (!data) {
      data = new Notification({});
    }

    if (network !== undefined) data.network = network;
    if (jobs !== undefined) data.jobs = jobs;
    if (messaging !== undefined) data.messaging = messaging;
    if (notifications !== undefined) data.notifications = notifications;

    await data.save();

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});