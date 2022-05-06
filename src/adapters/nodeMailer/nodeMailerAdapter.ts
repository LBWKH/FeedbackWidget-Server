import { MailAdapter, SendMailData } from "../mailAdapter";
import nodemailer from 'nodemailer'


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dc2702702da2c0",
    pass: "1d4c0dda7175c9"
  }
});

export class NodeMailerAdapter implements MailAdapter {
  async sendMail ({subject, body}: SendMailData) {
      await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Leonard <bwkh.leonard@gmail.com>',
    subject: subject,
    html: body
  })
  }
}