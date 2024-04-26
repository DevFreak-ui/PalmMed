import nodemailer from "nodemailer";
import handlebars from "handlebars";
import path from "path";
import fs from "fs";

const resetTemplate = fs.readFileSync(path.join(__dirname, "../../views/resetPassword.hbs"),"utf-8");

class AppMail {
  constructor(public recipientMail: string, public recipientName?: string, public resetUrl?: string
  ){}

  private template = handlebars.compile(resetTemplate);

  //Reset Message
  private resetMessageToSend = this.template({
    recipientName: this.recipientName,
    appName: "Task Pulse",
    resetUrl: this.resetUrl,
  });


  //creating transport
  createTransport() {
    return nodemailer.createTransport({
      host: process.env.HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
      },
    });
  }

  async sendMail(subject: string, htmlTemplateOrMessage: any) {
    const info = await this.createTransport().sendMail({
      from: process.env.USER,
      to: this.recipientMail,
      subject,
      html: htmlTemplateOrMessage,
    });

    console.log("Message sent: %s", info.messageId);
  }

  resetEmailMessage() {
    this.sendMail("PASSWORD RESET", this.resetMessageToSend);
  }
}

export default AppMail;