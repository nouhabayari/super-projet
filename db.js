const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://nouha:nouha@cluster0.l4rqw.mongodb.net/test",
    {
      useNewUrlParser: true,
     
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));
