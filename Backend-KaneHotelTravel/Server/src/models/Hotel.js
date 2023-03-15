const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "hotel",
    {
      // id: {
      //   type: DataTypes.UUID,
      //   primaryKey: true,
      //   defaultValue: DataTypes.UUIDV4,
      //   allowNull: false,
      // },
      image: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      services: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      category: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};
