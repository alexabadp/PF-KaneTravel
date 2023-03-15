const { Router } = require("express")
const { getHandlerBookingData } = require("../handlers/getHandler")

const router = Router();

router.get("/:email", getHandlerBookingData);

module.exports = router