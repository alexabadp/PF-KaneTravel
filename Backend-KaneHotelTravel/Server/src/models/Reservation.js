const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "reservation",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      checkin: {
        type: DataTypes.STRING
      },
      checkout: {
        type: DataTypes.STRING
      },
    },
    { timestamps: false }
  );
};
