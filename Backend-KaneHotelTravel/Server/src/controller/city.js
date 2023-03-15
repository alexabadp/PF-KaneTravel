const { City } = require("../db");
const { getActivitiesDb } = require("./activity");
const { getHotelsDb } = require("./hotel");
const { apiHotelInfo } = require("./infoApi");

const getCitiesDb = async () => {
  const allCities = await City.findAll();

  const cities = allCities.map((e) => {
    return {
      id: e.id,
      name: e.name,
      popularity: e.popularity,
      image: e.image,
    };
  });

  return cities;
};

const getCityDbByName = async (city) => {
  const infoHotels = await getHotelsDb(city);
  const infoActivities = await getActivitiesDb(city);

  const hotels = infoHotels.hotels.slice(0, 3);
  const activities = infoActivities.activities.slice(0, 3);
  return {
    hotels,
    activities,
  };
};

const postCityDb = async ({ image, name, popularity }) => {
  const newCity = await City.create({
    image,
    name,
    popularity,
  });

  return newCity;
};

module.exports = { getCitiesDb, postCityDb, getCityDbByName };
