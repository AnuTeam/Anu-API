const { Router } = require("express")

const router = new Router()


router.get("/ping", (req, res) => {
    res.send("PONG!")
})

module.exports = router