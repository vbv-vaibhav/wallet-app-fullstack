const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);
app.get("/", (req, res) => {
  res.json({
    message: "This is the root route for my fullstack wallet application",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
