import express from "express";
import {BACKEND_URL} from "@repo/common/config"

const app = express();
const PORT = 3000;

app.use(express.json());
console.log(BACKEND_URL);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});