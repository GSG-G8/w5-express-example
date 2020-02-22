const router = require("express").Router();

router.use("/cats", require("./cats"));
router.use("/dogs", require("./dogs"));

module.exports = router;