const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
app.get("/", (req, res) => {
  res.json({
    message: "This is the root route for my fullstack wallet application",
  });
});

module.exports = app;
