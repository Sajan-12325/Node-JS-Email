var http = require('http');
var uc = require('upper-case');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc.upperCase("hello sajan. how was your day?"));
    res.end();
}).listen(8080);


// Creating events in node js

var fs = require('fs');
var readStream = fs.createReadStream('./winter.html');

readStream.on('open', function(){
    console.log("Opened file using readstream"); 

});


var events  = require('events');
var eventEmitter = new events.EventEmitter();

//creating an event handler

var eventHandler = function() {
    console.log('I hear a scream');
}

eventEmitter.on('scream', eventHandler);

eventEmitter.emit('scream');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
  res.write('<input type="file" name="filetoupload"><br>');
  res.write('<input type="submit">');
  res.write('</form>');
  return res.end();
}).listen(8001);


var http = require('http');
var formidable = require('formidable');

http.createServer(function (req, res){
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, file){
            res.write('File uploaded');
            res.end();
        });
    } 
    else {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data" >');
        res.write('<input type = "file" name = "filetoupload"><br>');
        res.write('<input type = "submit">');
        res.write('</form>');
        return res.end();

    }

}).listen(8010);




/*
//SENDING AN EMAIL USING NODEJS

const nodemailer = require('nodemailer');
// Load sensitive data from environment variables
const gmailUser = process.env.EMAIL_USER;
const gmailPass = process.env.EMAIL_PASS;

var transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: gmailUser,
        pass: gmailPass,
    }

});

var mailOptions = {
    from: gmailUser,
    to: 'sthallapelly@atu.edu',
    subject: 'Sending Email using Node JS to atu.edu',
    text: 'This was very easy SAJAN !!!!!'
};

try{ transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
}
else {
    console.log('Email sent: ' + info.response);
}
}); 
}catch (error){
    console.error('Error sending email:', error);

};
*/



// Load environment variables
require('dotenv').config();
const nodemailer = require('nodemailer');

// Load sensitive data from environment variables
const gmailUser = process.env.EMAIL_USER;
const gmailPass = process.env.EMAIL_PASS;

if (!gmailUser || !gmailPass) {
    console.error("Error: Email credentials are missing in .env file!");
    process.exit(1);
}

// Configure the transporter
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailUser,
        pass: gmailPass,
    }
});

// Email details
var mailOptions = {
    from: gmailUser,
    to: 'sravyat189@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'This was very easy SRAVYA, HAPPY UGADI !!!!!'
};

// Send Email
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});  

// Should generate this app password first
