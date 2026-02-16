const mongoose = require("mongoose");
const dotenv = rrquire("dotenv");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const userSchema = new mongoose.Schema({
  username: String,
  password: string,
  firstname: string,
  lastname: string,
});

const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account",accountSchema);

module.exports = {
  User,
  Account
}
