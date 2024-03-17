const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/blogs", routes);
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

mongoose
  .connect(
    "mongodb+srv://umaisusmani3:u20230177maismani@starchyconnectioncluste.aanru07.mongodb.net/?retryWrites=true&w=majority&appName=StarchyConnectionCluster"
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
