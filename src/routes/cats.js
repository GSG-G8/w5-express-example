const router = require("express").Router();
const cats = require("../controller/cats");

router.get("/", cats.index);
router.get("/names", cats.names);

module.exports = router;