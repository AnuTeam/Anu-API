const { Router } = require("express")
    , apiV1 = require("./v1")
    , router = new Router();
    
router.use("/v1", apiV1);

module.exports = router;
