const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const sendinblueTransport = require("nodemailer-sendinblue-transport");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport(
  new sendinblueTransport({
    apiKey: process.env.API_KEY,
    timeout: 5000,
  })
);

app.post("/send", (req, res) => {
  const { name, email, jobtypes, message } = req.body;

  const mailOptions = {
    from: `${email}`,
    to: "asharzamakhan01@gmail.com",
    subject: "Job Offer from Portfolio",
    text: `
Details of the Sender :
Name of sender : ${name}
Email of sender : ${email}
Job type selected : ${jobtypes}
Message to you : ${message}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.send();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
