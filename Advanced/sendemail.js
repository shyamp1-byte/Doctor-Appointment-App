// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'yahoo',
//   auth: {
//     user: 'shyampedibhotla1@yahoo.com',
//     pass: 'shyamp_125'
//   }
// });

// var mailOptions = {
//   from: 'shyampedibhotla1@yahoo.com',
//   to: 'mehermc360@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });
//Port = 587, mention TLS = true, SMTP address = smtp.yahoo.com

const nodemailer = require('nodemailer');

// Create a transporter using your Yahoo SMTP credentials
const transporter = nodemailer.createTransport({
  host: 'smtp.mail.yahoo.com',
  port: 465,
  secure: true, // TLS enabled
  auth: {
    user: 'ruthvik1@yahoo.com',
    pass: 'Truckmasti123',
  },
});

// Email message options
const mailOptions = {
  from: 'ruthvik1@yahoo.com',
  to: 'mehermc360@gmail.com',
  subject: 'Hello from Yahoo',
  text: 'This is a test email sent from Yahoo to Gmail!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
