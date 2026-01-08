const { MailerSend, EmailParams, Sender, Recipient} = require('mailersend');
const mailerSend = new MailerSend({
    apiKey: process.env.TOKENAPI_MAIL,
});

async function Sendmailregister(to,name) {
    const sentFrom = new Sender("champ.test@domain.com", "champ");
    const recipients = [
        new Recipient(to,name)
    ];
    const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("ส่งอีเมลล์ยืนยันการสมัครสมาชิก")
        .setHtml("Greetings from the team, you got this message through MailerSend.")
        .setText("Greetings from the team, you got this message through MailerSend.");
    
    await mailerSend.email.send(emailParams);

}

module.exports = {Sendmailregister};


