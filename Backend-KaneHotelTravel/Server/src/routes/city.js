const { Router } = require("express");
const { postHandlerCity } = require("../handlers/postHandler");
const { getHandlerCity, getHandlerCitiesByName } = require("../handlers/getHandler");

const router = Router();

router.post("/", postHandlerCity);
router.get("/", getHandlerCity);
router.get("/:city", getHandlerCitiesByName);

module.exports = router;
