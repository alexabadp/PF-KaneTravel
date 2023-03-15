const { City, Activity } = require("../db");

const getActivitiesDb = async ({ city, order, filter }) => {
  if (!order && !filter) {
    const allActivities = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "image", "price", "category"],
        },
      ],
      order: [[Activity, "name", "ASC"]],
    });

    return allActivities[0];
  } else if (order && !filter) {
    const allActivities = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "image", "price", "category"],
        },
      ],
      order: [[Activity, "price", order]],
    });
    return allActivities[0];
  } else if (!order && filter) {
    const allActivities = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "image", "price", "category"],
          where: { category: filter },
        },
      ],
      order: [[Activity, "name", "ASC"]],
    });
    return allActivities[0];
  } else {
    const allActivities = await City.findAll({
      where: {
        name: city,
      },
      include: [
        {
          model: Activity,
          attributes: ["id", "name", "image", "price", "category"],
          where: { category: filter },
        },
      ],
      order: [[Activity, "price", order]],
    });
    return allActivities[0];
  }
};

const getActivityDbByName = async (activity) => {
  const dataActivity = await Activity.findAll({
    where: {
      name: activity,
    },
  });
  return dataActivity;
};

const postActivityDb = async ({
  image,
  name,
  description,
  price,
  duration,
  city,
}) => {
  const newActivity = await Activity.create({
    image,
    name,
    description,
    price,
    duration,
  });
  const cityDb = await City.findAll({
    where: {
      name: city,
    },
  });

  await newActivity.addCity(cityDb);
  return newActivity;
};

module.exports = { getActivitiesDb, getActivityDbByName, postActivityDb };
