const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "payment",
    {
      id: {
        type: STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
