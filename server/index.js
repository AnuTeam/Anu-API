const express = require("express");
const { apiRouter } = require("./routes");

const app = express();
const port = process.env.PORT || 3000;
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
