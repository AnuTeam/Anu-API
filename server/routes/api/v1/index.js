const { Router } = require("express")
    , router = new Router();

router.get("/ping", (req, res) => {
    res.send("PONG!")
});

module.exports = router;
