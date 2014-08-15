var Crawler = require('crawler').Crawler;
var Mailgun = require('mailgun').Mailgun;
var readdir = require('fs').readdirSync;

if (!process.env.MAILGUN_KEY) {
  throw new Error('Env variable MAILGUN_KEY not set');
}

if (readdir('./crawlers').length === 0) {
  throw new Error('No crawlers found');
}

readdir('./crawlers').forEach(function(file) {

  var crawlerFile = require('./crawlers/' + file);

  var crawler = new Crawler({
    callback: function(error, result, $) {

      if (crawlerFile.check($)) {
        var text = 'Notification for' + crawlerFile.url;
        sendText(crawlerFile.sender, crawlerFile.receiver, text, text);
      } else {
        crawler.queue(crawlerFile.url);
      }

    }
  });

  crawler.queue(crawlerFile.url);

});

function sendMail(from, to, subject, text) {
  var mailgun = new Mailgun(process.env.MAILGUN_KEY);
  mailgun.sendText(from, to, subject, text);
}
