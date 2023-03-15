const { postCityDb } = require("../controller/city");
const { postHotelDb } = require("../controller/hotel");
const { postRoomDb } = require("../controller/room");
const { postActivityDb } = require("../controller/activity");
const { paymentRooms } = require("../controller/payment");
const { nodeMailer } = require("../controller/nodeMailer");

const postHandlerCity = async (req, resp) => {
  try {
    const result = await postCityDb(req.body);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).send(error.message);
  }
};
const postHandlerHotel = async (req, resp) => {
  try {
    const result = await postHotelDb(req.body);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).send(error.message);
  }
};
const postHandlerRoom = async (req, resp) => {
  try {
    const result = await postRoomDb(req.body);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).send(error.message);
  }
};
const postHandlerActivity = async (req, resp) => {
  try {
    const result = await postActivityDb(req.body);
    resp.status(200).json(result);
  } catch (error) {
    resp.status(400).send(error.message);
  }
};
const postHandlerPaymentRoom = async (req, resp) => {
  try {
    const {id, amount, description,formData} = req.body;

    resp.status(200).json(await paymentRooms(id, amount, description, formData));
  } catch (error) {
    let message = "Error al procesar el pago";
    console.log(error.message, "error del pago")
    if (error.raw) {
      if (error.raw.message) {
        message = error.raw.message;
      }
    }
    
    resp.json({error: message});
  }
};
const handlerNodeMailer = async (req, resp) => {
  try {
    const result = await nodeMailer(req.body)
    resp.status(200).json(result)
  } catch (error) {
    resp.status(400).send(error.message)
  }
}
module.exports = {
  postHandlerCity,
  postHandlerHotel,
  postHandlerRoom,
  postHandlerActivity,
  postHandlerPaymentRoom,
  handlerNodeMailer,
};
