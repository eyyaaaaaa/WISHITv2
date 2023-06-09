const nodemailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.EMAIL_PASSWORD);
const sendEmail = (options) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
          user: process.env.EMAIL_FULLNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
    
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text,
      };
    
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });
    };

module.exports = sendEmail;