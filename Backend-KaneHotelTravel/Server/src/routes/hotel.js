const { Router } = require("express");
const { postHandlerHotel } = require("../handlers/postHandler");
const { getHandlerHotels } = require("../handlers/getHandler");
const { getHandlerHotelByName } = require("../handlers/getHandler");

const router = Router();

router.post("/", postHandlerHotel);
router.get("/", getHandlerHotels);
router.get("/:hotel", getHandlerHotelByName);

module.exports = router;
