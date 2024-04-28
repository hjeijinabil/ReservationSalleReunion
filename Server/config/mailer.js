const nodemailer = require('nodemailer');

// Créer un objet transporteur en utilisant le transport SMTP par défaut
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "Wajdibejaoui26@gmail.com", // Adresse e-mail de l'expéditeur
        pass: "ppoa ouud dbnb vqvv", // Mot de passe de l'expéditeur
    }
});

const sendMail = (to, object, content, isHtml) => {
    if (isHtml) {
        transporter.sendMail({
            from: "wajdibejaoui26@gmail.com", // Adresse e-mail de l'expéditeur
            to: to, // Adresse e-mail du destinataire
            subject: object, // Objet du courriel
            html: content // Corps du courriel au format HTML
        }, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('E-mail envoyé : ' + info.response);
            }
        });
    } else {
        transporter.sendMail({
            from: "ziedseidi27@gmail.com", // Adresse e-mail de l'expéditeur
            to: to, // Adresse e-mail du destinataire
            subject: object, // Objet du courriel
            text: content // Corps du courriel au format texte brut
        }, (err, info) => {
            if (err) {
                console.log(err);
            } else {
                console.log('E-mail envoyé : ' + info.response);
            }
        });
    }
};

module.exports = { sendMail };