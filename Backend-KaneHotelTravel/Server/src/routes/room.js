const { Router } = require("express");
const { postHandlerRoom} = require("../handlers/postHandler");
const { getHandlerRoom } = require("../handlers/getHandler")
const router = Router();

router.post("/", postHandlerRoom);
router.get("/", getHandlerRoom);

module.exports = router;
