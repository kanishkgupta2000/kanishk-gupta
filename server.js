const express = require("express");
const connectDB = require("./config/db");
//const path = require("path");
const cors = require("cors");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api", require("./routes/contactUs"));

console.log("hii");
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
