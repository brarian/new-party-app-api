// let transporter = nodemailer.createTransport(8080[name])
// // verify connection configuration
// transporter.verify(function(error, success) {
//     if (error) {
//          console.log(error);
//     } else {
//          console.log('Server is ready to take our messages');
//     }
//  });


//  var message = {
//     from: 'b.namonywa@gmail.com',
//     to: 'tdaustie@gmail.com',
//     subject: 'Message title',
//     text: 'BLah',
//     html: '<p>HTML version sdfjkldfkjsdf  of the message</p>'
// };
const nodemailer = require('nodemailer');


// Only needed if you don't have a real mail account for testing

// // create reusable transporter object using the default SMTP transport
// let transporter = nodemailer.createTransport({
//     // host: '',
//     // port: 465,
//     // secure: true, // true for 465, false for other ports
//     // auth: {
//     //     user: 'username',
//     //     pass: 'password'
//     // }
//     service: "Gmail",
// });

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "partyreminders2018@gmail.com",
        pass: "Namonywa2018"
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'partyreminders2018@gmail.com', // sender address
    to: 'b.namonywa@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello sdf;lkjsfldsfj world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
console.log('this is the mailer!!!'); 