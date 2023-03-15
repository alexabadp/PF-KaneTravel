const transporter = require("./NodeMailerConfig");
const qrcode = require("qrcode");

const nodeMailer = async ({
  name,
  lastname,
  email,
  hotel,
  checkin,
  checkout,
  rooms,
  price,
  reservacion,
}) => {
  const qr = qrcode.toFile("qr.png", reservacion, function (err) {
    if (err) return console.log("error occurred");
  });
  contentHTML = `
  <h2>Detalle de la Reserva</h2>
    <ul>
        <li>Reserva a nombre de ${name} ${lastname}</li>
        <li>En el Hotel ${hotel}</li>
        <li>Reservo las siguientes habitaciones ${rooms}</li>
        <li>Fecha de Check-In ${checkin} y de Check-Out ${checkout}</li>
        <li>Con un pago total de USD$ ${price}</li>
    </ul>
    <p>Esperamos disfrute sus vacaciones!!!</p>
    <span>Por otras consultas no dude en enviar un correo a travelkane@gmail.com</span>
    <p>Adjuntamos el codigo QR para el Check-In automatico</p>
  `;
  const info = await transporter.sendMail({
    from: '"KaneTravels" <travelkane@gmail.com>', // sender address
    to: email,
    subject: "Reserva ✔",
    html: contentHTML,
    attachments: [
      {
        filename: "qr.png",
        path: "./qr.png",
        cid: "QR", //same cid value as in the html img src
      },
    ],
  });
  return info.messageId;
};
module.exports = { nodeMailer };
