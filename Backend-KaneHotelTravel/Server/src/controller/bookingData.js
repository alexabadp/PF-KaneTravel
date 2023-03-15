const { Reservation, Hotel } = require("../db")

const getBooking = async (email) => {
    const bookingById = await Reservation.findAll({
        where:{
            userEmail: email
        },
        include:[
            {
                model: Hotel,
                attributes: ["id", "name"]
            }
        ]
    })
    return bookingById
}
module.exports = { getBooking };