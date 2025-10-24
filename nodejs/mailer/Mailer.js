const nodemailer = require('nodemailer');
class Mailer{
    HOST = 'smtp.gmail.com';
    PORT = '465';
    SECURE = true;
    USER = 'azamirfan9@gmail.com';
    PASSWORD = 'khmd oeqy dxwk ezum';
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: this.HOST,
            port: this.PORT,
            secure: this.SECURE,
            auth: {
                user: this.USER,
                pass: this.PASSWORD,
            },
        });
        // this.transporter.verify((error, success) => {
        //     if (error) {
        //         console.error(error);
        //     } else {
        //         console.log("Server is ready to take our messages ");
        //     }
        // });
    }

    async sendEmail(to, subject, text, html) {
        console.log(to);
        const mailOptions = {
            from: this.transporter.options.auth.user, // Sender address
            to: to,
            subject: subject,
            text: text,
            html: html,
        };

        try {
            let info = await this.transporter.sendMail(mailOptions);
            console.log('Message sent: %s', info.messageId);
            return info;
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }

    startMail(){
        this.sendEmail(
            'irfanazam@learningspiral.co.in',
            'OTP',
            '12345',
            '12345'
         );
    }
}

module.exports = Mailer;