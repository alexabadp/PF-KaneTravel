const axios = require("axios");
const { City, Hotel, Room, Activity } = require("../db");
const { apiCities, apiHotels, apiRooms, apiActivities } = require("./dataApi");

const apiDbInfo = async () => {
  const apiInfo = apiCities.map((e) => {
    return {
      id: e.id,
      name: e.shortName ? e.shortName : "Data not found",
      image: e.image ? e.image : "Data not found",
      popularity: e.popularity ? e.popularity : "Data not found",
    };
  });
  const created = await City.bulkCreate(apiInfo);

  return created;
};
const apiHotelInfo = async () => {
  apiHotels.map(async (e) => {
    const hotels = {
      name: e.name,
      image: e.image,
      services: e.services,
      description: e.description,
      category: e.category,
      rating: e.rating,
      cityId: e.cityId,
    };

    const namecity = e.nameCity;

    const newHotel = await Hotel.create(hotels);

    // let cityDb = await City.findAll({
    //   where: { name: namecity },
    // });

    // await newHotel.addCity(cityDb);
  });

  const allHotels = Hotel.findAll();

  return allHotels;
};
const apiRoomInfo = async () => {
  apiRooms.map(async (e) => {
    const rooms = {
      name: e.name,
      price: e.price,
      description: e.description,
      image: e.image,
      hotelId: e.hotelId,
    };
    const nameHotel = e.nameHotel;

    const newRoom = await Room.create(rooms);

    // let hotelDb = await Hotel.findAll({
    //   where: { name: nameHotel },
    // });

    // await newRoom.addHotel(hotelDb);
  });
};
const apiActivityInfo = async () => {
  apiActivities.map(async (e) => {
    const activity = {
      name: e.name,
      image: e.image,
      description: e.description,
      category: e.category,
      duration: e.duration,
      price: e.price,
      cityId: e.cityId,
    };
    const nameCity = e.nameCity;
    const newActivity = await Activity.create(activity);

    // let cityDb = await City.findAll({
    //   where: {
    //     name: nameCity,
    //   },
    // });
    // await newActivity.addCity(cityDb);
  });
};
module.exports = { apiDbInfo, apiHotelInfo, apiRoomInfo, apiActivityInfo };
