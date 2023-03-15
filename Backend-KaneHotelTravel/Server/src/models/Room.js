const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "room",
    {
      name: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
