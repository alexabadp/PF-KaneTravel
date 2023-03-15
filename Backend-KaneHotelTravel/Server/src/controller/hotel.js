const { City, Hotel, Room } = require("../db");

const getHotelsDb = async ({ city, filter, order }) => {
  if (!filter && !order) {
    const allHotels = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Hotel,
          attributes: ["id", "name", "image", "rating", "category"],
        },
      ],
      order: [[Hotel, "name", "ASC"]],
    });

    return allHotels[0];
  } else if (filter && !order) {
    const allHotels = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Hotel,
          attributes: ["id", "name", "image", "rating", "category"],
          where: { category: filter },
        },
      ],
      order: [[Hotel, "name", "ASC"]],
    });
    return allHotels[0];
  } else if (!filter && order) {
    const allHotels = await City.findAll({
      where: {
        name: city,
      },

      include: [
        {
          model: Hotel,
          attributes: ["id", "name", "image", "rating", "category"],
        },
      ],
      order: [[Hotel, "rating", order]],
    });
    return allHotels[0];
  } else {
    const allHotels = await City.findAll({
      where: {
        name: city,
      },

      include: [
        {
          model: Hotel,
          attributes: ["id", "name", "image", "rating", "category"],
          where: { category: filter },
        },
      ],
      order: [[Hotel, "rating", order]],
    });
    return allHotels[0];
  }
};

const getHotelDbByName = async (hotel) => {
  const dataHotel = await Hotel.findAll({
    where: {
      name: hotel,
    },
    include: {
      model: Room,
    },
  });

  return dataHotel;
};

const postHotelDb = async ({
  image,
  name,
  description,
  rating,
  services,
  category,
  cityId,
}) => {
  const newHotel = await Hotel.create({
    image,
    name,
    description,
    rating,
    services,
    category,
    cityId,
  });

  return newHotel;
};

const getHotelsBackOffice = async () => {
  const allHotels = await Hotel.findAll();

  return allHotels;
};
module.exports = {
  getHotelsDb,
  getHotelDbByName,
  postHotelDb,
  getHotelsBackOffice,
};
