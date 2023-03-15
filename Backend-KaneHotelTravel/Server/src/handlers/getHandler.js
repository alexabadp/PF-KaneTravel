const { getCitiesDb, getCityDbByName } = require("../controller/city");
const {
  getHotelsDb,
  getHotelDbByName,
  getHotelsBackOffice,
} = require("../controller/hotel");
const {
  getActivitiesDb,
  getActivityDbByName,
} = require("../controller/activity");

const { getRoomDb } = require("../controller/room");
const { getBooking } = require("../controller/bookingData");
const { getReportReservation } = require("../controller/payment");

const getHandlerCity = async (req, resp) => {
  try {
    const result = await getCitiesDb();
    resp.status(200).send(result);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerHotels = async (req, resp) => {
  try {
    const result = await getHotelsDb(req.query);
    resp.status(200).send(result);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerActivities = async (req, resp) => {
  try {
    const result = await getActivitiesDb(req.query);
    resp.status(200).send(result);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerCitiesByName = async (req, resp) => {
  try {
    const city = req.params.city;
    const data = { city };
    const result = await getCityDbByName(data);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).send(error.message);
  }
};
const getHandlerHotelByName = async (req, resp) => {
  try {
    const result = await getHotelDbByName(req.params.hotel);
    resp.status(200).send(result[0]);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerActivityByName = async (req, resp) => {
  try {
    const result = await getActivityDbByName(req.params.activity);
    resp.status(200).send(result[0]);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerRoom = async (req, resp) => {
  try {
    const result = await getRoomDb();
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};

const getHandlerHotelsBaackOffice = async (req, resp) => {
  try {
    const result = await getHotelsBackOffice();
    resp.status(200).send(result);
  } catch (error) {
    resp.status(400).json(error.message);
  }
};
const getHandlerBookingData = async (req, resp) => {
  const { email } = req.params
  try {
    const result = await getBooking(email)
    resp.status(200).json(result)
  } catch (error) {
    resp.status(400).send(error.message)
  }
}

const getHandlerReportReservation = async(req, res) =>{
  const {hotel} = req.query
  try {
    const result = await getReportReservation(hotel)
    console.log("Retornamos: ",result);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}  

module.exports = {
  getHandlerCity,
  getHandlerHotels,
  getHandlerActivities,
  getHandlerHotelByName,
  getHandlerActivityByName,
  getHandlerRoom,
  getHandlerCitiesByName,
  getHandlerHotelsBaackOffice,
  getHandlerBookingData,
  getHandlerReportReservation
};
