const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./src/routes/authRoutes");
const bodyParser = require("body-parser");

const port = 3000;
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/auth", authRoutes);

const MONGO_URL =
  "mongodb+srv://bikramghimire:eqayoZsAkRNGzpem@cluster0.wrknw94.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(port, () => {
  console.log("server is rnning ");
});
