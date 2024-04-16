require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const { ConnectToMongoDB } = require("./connection");
const browserDetailsRoute = require("./routes/browserDetails");
const userDetailsRoute = require("./routes/userDetails");
const app = express();
ConnectToMongoDB(process.env.mongodbURI).then(() =>
  console.log("MongoDB connected successfully")
);
app.use(cors());
app.use(express.json());
app.use("/api/browser-details", browserDetailsRoute);
app.use("/api/user-details", userDetailsRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started at PORT: ${process.env.PORT}`);
});
