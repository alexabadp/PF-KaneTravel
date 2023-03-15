const { Router } = require("express");
const {
  getHandlerHotelsBaackOffice,
  getHandlerHotelByName,
  getHandlerReportReservation
} = require("../handlers/getHandler");

const router = Router();

router.get("/hotels", getHandlerHotelsBaackOffice);
router.get("/reservations", getHandlerReportReservation);
router.get("/:hotel", getHandlerHotelByName);

module.exports = router;
