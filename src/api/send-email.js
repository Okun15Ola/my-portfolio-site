const nodemailer = require('nodemailer');
const { UserConfig } = require('../config/userConfig');

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    try {
      const { name, email, subject, message } = JSON.parse(event.body);

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: UserConfig.email,
          pass: UserConfig.password,
        },
      });

      const mailOptions = {
        from: email,
        to: UserConfig.email,
        subject: `New Portfolio Message from ${name} - ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      };

      await transporter.sendMail(mailOptions);

      alert("Email sent successfully");

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully' }),
      };
    } catch (error) {
      console.error('Error sending email:', error);
      alert("Email sent failed");
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error sending email' }),
      };
    }
  } else {
    alert("Email method not allowed");
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }
};
