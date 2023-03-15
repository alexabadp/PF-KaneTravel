require("dotenv").config();
const { PORT } = process.env;
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const {
  apiDbInfo,
  apiHotelInfo,
  apiRoomInfo,
  apiActivityInfo,
} = require("./src/controller/infoApi");

conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    apiDbInfo();
    apiHotelInfo();
    apiRoomInfo();
    apiActivityInfo();
    console.log("%s listening at ", PORT);
  });
});
