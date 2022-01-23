const express = require("express");
const app = express();
const mongoose = require("mongoose");


const dotenv = require("dotenv");
dotenv.config();

const dbURL = 'mongodb+srv://ayush-sri:ayushsri@cluster0.mh0vd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const port = 8081;

app.use(express.json());
// app.use(cors());
app.use("/user", require("./routes/user"));

mongoose.connect(dbURL).then(() => {

    console.log("Connected to MongoDB");
  
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  });

  
