const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//middleware
//body parder middleware : give us accecss to req.body
app.use(express.urlencoded({ extended: true }));

//routes/controllers
const userController = require("./controllers/users");
app.use("/users", userController);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
