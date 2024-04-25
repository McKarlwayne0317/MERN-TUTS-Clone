const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const ErrorHandler = require("./middleware/errorHandlingMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", require("./routes/goalsRoute"));
app.use("/api/users", require("./routes/userRoute"));

app.use(ErrorHandler);

connectDB();

app.listen(port, () => console.log(`Server started on port ${port}`));
