require('dotenv').config()
const express = require('express')
const app = express()
const nodemailer = require('nodemailer')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/' , function(res,req){
    console.log('Hello World');
})

const transporter = nodemailer.createTransport({
    port:465,
    // service:'Gmail',
    host:'smtp.gmail.com',
    secure:true,
    // secureConnection: false,
  logger:true,
  debug:true,

    auth: {
    
    //   user: process.env.SMTP_MAIL,
      user:'devanshshrivastava07@gmail.com',
    //   pass: process.env.SMTP_PASSWORD
      pass:'zebjucvslhybesua'
    },
    // tls:{
    //     rejectUnAuthorized:true
    // }
  });

const port = process.env.PORT

app.post('/sendmail' , (req,res) => {
    const {email , contact , name, purpose} = req.body
    console.log('Email: ' + email );
    // console.log('Subject: ' + subject );
    // console.log('Message: ' + message );

    var mailOption = {
        from:'devanshshrivastava07@gmail.com',
        to:email,
        subject:`Successfully recieved your message for "${purpose}"`,
        html:`<p>Dear <b>${name}</b>;<br/>Thank you for your consideration. Hope you have visited my site and downloaded my resume. I am very much excited and honoured for the work with you. I have got your contact details and I will contact you soon with the requirements as per your purpose of <b>"${purpose}</b>".<br /><br />Regards,<br/> Devansh Shrivastava<p>`
    }

    transporter.sendMail(mailOption , function(err , info){
        if(err){
            console.error("Error" + err);
            res.json({mssg:"I Apologise! Some server-side error has occured. Please try again after some time" , status : 400})
        }

        else{
            console.log("Email sent Successfully");
            res.json({mssg:"Message sent successfully! Kindly check your mail." , status : 200})

        }
    })
})

app.listen(port , (req,res)=>{
    console.log('Server running on port ' + port);
})