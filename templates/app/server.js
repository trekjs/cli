import Trek from 'trek';

var app = new Trek(__dirname);

app.get('/', function* (next) {
  this.body = 'Hello Trek.js!';
});

app.on('error', function (err, context) {
  app.logger.error(err);
});

app.run();
