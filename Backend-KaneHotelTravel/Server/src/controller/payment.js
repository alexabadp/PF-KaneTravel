const { Op } = require("sequelize");
const { Payment, Users, Reservation, Room, Hotel } = require("../db");

require("dotenv").config();
const { KEY_STRIPE } = process.env;
const Stripe = require('stripe');
const { nodeMailer } = require("./nodeMailer");

const stripe = new Stripe(KEY_STRIPE)


const paymentRooms = async(id, amount, description, formData) => {
  let reservationQuery = {error: "Error al procesar el pago"};
  const roomsHardCode = formData.image.map(e => e.id);
  
  let userEmail = null;
  const stripePayment = await stripe.paymentIntents.create({
    amount,
    currency: "USD",
    description,
    payment_method: id,
    confirm: true
  });

  if (stripePayment.status === 'succeeded') {
    const newPayment = await Payment.create({
      id: stripePayment.id,
      amount
    })
  
    const existingEmail = await Users.findByPk(formData.email);
  
    if(existingEmail){
      userEmail = existingEmail.email;
    }else{
      const newUser = await Users.create({
        email: formData.email,
        name: formData.name
      });
      userEmail = newUser.email;
    }
  
    const newReservation = await Reservation.create({
      checkin: formData.checkin,
      checkout: formData.checkout
    });
  
    await newPayment.setReservation(newReservation);
    await newReservation.setUser(userEmail);
    await newReservation.setRooms(roomsHardCode);
    await newReservation.setHotel(formData.hotelId);
  
    reservationQuery = await Reservation.findByPk(newReservation.id,{
      include: [
        {model: Users, attributes: ['email','name']}, 
        {model: Hotel, attributes: ['name']},
        {model: Room, attributes: ['name']}
      ]
    });
    nodeMailer({...formData, reservacion: newReservation.id})
  }else{
    if (stripePayment.status) {
      reservationQuery = {error: "Error: "+stripePayment.status}
    }
  }

  return reservationQuery;

}

const getReportReservation = async(hotel) =>{
  let reservations = {};
  if (hotel === 'all') {
    reservations = await Reservation.findAll({
      include: [
        {model: Users, attributes: ['email','name']},
        {model: Hotel, attributes: ['name']}
      ]
    });
  }else{
    reservations = await Reservation.findAll({
      include: [
        {model: Users, attributes: ['email','name']},
        {model: Hotel, attributes: ['name']}
      ],
      where: {
        hotelId: hotel
      }
    });
  }
  
  return reservations;
}

module.exports = {
  paymentRooms,
  getReportReservation
}