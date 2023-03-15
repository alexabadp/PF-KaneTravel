const { Router } = require("express");
const { handlerNodeMailer } = require("../handlers/postHandler")

const router = Router();

router.post("/", handlerNodeMailer)

module.exports = router