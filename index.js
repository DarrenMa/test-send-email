const nodemailer = require('nodemailer');

async function run() {
  console.log('started')
  try {

    // create transporter object with smtp server details
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: process.env.PORT,
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.PASS
      }
    });

    // send email
    await transporter.sendMail({
      from: process.env.FROM,
      to: process.env.TO,
      subject: 'Test Email Subject',
      text: 'You received your email'
    });

    console.log('finished')
  } catch (error) {
    console.error(error.message);
  }
}

run();