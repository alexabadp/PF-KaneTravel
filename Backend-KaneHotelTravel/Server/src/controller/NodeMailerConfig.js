const nodemailer = require("nodemailer");
const { NM_PASS } = process.env 

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "travelkane@gmail.com", 
      pass: NM_PASS, 
    },
  });

transporter.verify().then( () => {
    console.log("Server NodeMailer Ready")
})
module.exports = transporter