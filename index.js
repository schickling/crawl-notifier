var Crawler = require('crawler').Crawler;
var Mailgun = require('mailgun').Mailgun;

if (!process.env.MAILGUN_KEY) {
  throw new Error('Env variable MAILGUN_KEY not set');
}

var mg = new Mailgun(process.env.MAILGUN_KEY);

mg.sendText('example@example.com', ['Recipient 1 <rec1@example.com>', 'rec2@example.com'],
  'This is the subject',
  'This is the text',
  'noreply@example.com', {},
  function(err) {
    if (err) console.log('Oh noes: ' + err);
    else console.log('Success');
  });
