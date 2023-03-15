const { Router } = require("express");
const { postHandlerPaymentRoom } = require("../handlers/postHandler");

const router = Router();

router.post("/rooms", postHandlerPaymentRoom);

module.exports = router;
