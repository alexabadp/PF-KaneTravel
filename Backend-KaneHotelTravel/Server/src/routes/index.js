const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const cityRouter = require("./city");
const hotelRouter = require("./hotel");
const roomRouter = require("./room");
const activityRouter = require("./activity");
const paymentRouter = require("./payment");
const backOffice = require("./backOffice");
const bookingData = require("./bookingData")

const router = Router();
const nodemailer = require("./nodeMaile");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/city", cityRouter);
router.use("/hotel", hotelRouter);
router.use("/room", roomRouter);
router.use("/activity", activityRouter);
router.use("/payment", paymentRouter);
router.use("/backOffice", backOffice);
router.use("/bookings", bookingData);

module.exports = router;
