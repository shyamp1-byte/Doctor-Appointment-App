var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shyamie123@gmail.com',
    pass: 'Lil_Buddha774749'
  }
});

var mailOptions = {
  from: 'shyamie123@gmail.com',
  to: 'mehermc360@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});