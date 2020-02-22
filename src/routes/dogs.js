const router = require("express").Router();
const dogs = require("../controller/dogs");

router.get("/", dogs.all);
router.get("/find/:id", dogs.get);
router.get("/search/:name", dogs.search);

module.exports = router;