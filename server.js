const express = require('express');
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running at port 3001"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    auth: {
        user: "*****@live.com.sg",
        pass: ""
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
})


router.post("/contact", (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.message;
    const message = req.body.message;

    // Validation
    if (!email || !phone || !message || !name) {
        return res.status(400).json({ status: 'error', message: 'Missing required fields' });
    }

    // Preparing email message options
    const mail = {
        from: name,
        to: "*****@live.com.sg",
        subject: "Contact Form Submssions - Portfolio",
        html:
            `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>`,
    };

    // Send email and log the response
    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});
