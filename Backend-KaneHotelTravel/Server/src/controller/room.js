const { Room } = require("../db");

const postRoomDb = async ({ image, name, description, price, hotelId }) => {
  const newRoom = await Room.create({
    image,
    name,
    description,
    price,
    hotelId,
  });
  return newRoom;
};

const getRoomDb = async () => {
  const allRooms = await Room.findAll();

  const rooms = allRooms.map((e) => {
    return {
      image: e.image,
      name: e.name,
      price: e.price,
      description: e.description,
    };
  });
  return rooms;
};

module.exports = { postRoomDb, getRoomDb };
