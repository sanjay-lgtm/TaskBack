
var nodemailer = require('nodemailer');
const email = require('../config').get('staging').email

export const sendmail = async (from, to, subject, text) => {
  var transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sanjaysharma28111997@gmail.com',
      pass: 'ktnp veus vmzm rxjg'
    }

  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return false
    } else {
      console.log('Email sent: ' + info.response);
      return true
    }
  })
}
  ;
