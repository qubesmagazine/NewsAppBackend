var _ = require('lodash');
var nodemailer = require('nodemailer');

// Load environment variables from .env
require('dotenv').config();

var config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'thenetafrica@gmail.com',
        pass: process.env.EMAIL_PASSWORD, // Access the email password from environment variable
    },
};

var transporter = nodemailer.createTransport(config);

var defaultMail = {
    from: 'thenetafrica@gmail.com',
    text: 'test text',
};

const send = (to, subject, html) => {
    // use default setting
    mail = _.merge({ html }, defaultMail, to);

    // send email
    transporter.sendMail(mail, function (error, info) {
        if (error) return console.log(error);
        console.log('mail sent:', info.response);
    });
};

module.exports = {
    send,
};
