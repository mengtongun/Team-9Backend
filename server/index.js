const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const storeRouter = require("./routes/StoreRouter");

const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
app.use('/store/category',storeRouter);


//Connect to Database
mongoose.connect(
  "mongodb+srv://Tong:1234@stores.djz3f.mongodb.net/category?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);


// Env Port
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server Run On Port ${port}`);
});
