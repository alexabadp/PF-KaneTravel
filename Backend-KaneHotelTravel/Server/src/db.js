require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Hotel, City, Room, Activity, Users, Payment, Reservation } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// City.belongsToMany(Hotel, { through: "hotelCity" });
// Hotel.belongsToMany(City, { through: "hotelCity" });
// Hotel.belongsToMany(Room, { through: "hotelRoom" });
// Room.belongsToMany(Hotel, { through: "hotelRoom" });
// City.belongsToMany(Activity, { through: "activityCity" });
// Activity.belongsToMany(City, { through: "activityCity" });

City.hasMany(Hotel);
Hotel.belongsTo(City);

City.hasMany(Activity);
Activity.belongsTo(City);

Hotel.hasMany(Room);
Room.belongsTo(Hotel);

Users.hasMany(Reservation);
Reservation.belongsTo(Users);

Payment.hasOne(Reservation);
Reservation.belongsTo(Payment);

Hotel.hasMany(Reservation);
Reservation.belongsTo(Hotel);

Room.belongsToMany(Reservation, { through: 'roomReservations' });
Reservation.belongsToMany(Room, { through: 'reservationRooms' });


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
