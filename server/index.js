const express = require("express")
    , cors = require("cors")
    , morgan = require("morgan")
    , { apiRouter } = require("./routes");

const app = express()
    , port = process.env.PORT || 3000;

// configurations
app.set("trust proxy", true);
app.set("json spaces", 2);
app.set("x-powered-by", false);

// middlewares
app.use(cors())
app.use(morgan("combined"));
app.use("/api", apiRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.all('*', (req, res) => {
    res.status(404).jsonp({
        status: 404,
        message: "Page not found",
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});