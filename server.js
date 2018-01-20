const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Config = require('./config');
const Routes = require('./routes/index')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const cors = require('cors');
const CLIENT_ORIGIN  = require('./config');

app.use(
 cors({
  origin: CLIENT_ORIGIN
 })
);

mongoose.Promise = global.Promise;

mongoose.connect(Config.DATABASE_URL, err => {
	if ((err) =>  reject(err));
	server = app.listen(Config.PORT, () => console.log(`listening on ${Config.PORT}`))
	.on('error', err => {
    mongoose.disconnect();
 	})
});
Routes.Login(app);
Routes.About(app);
Routes.User(app);
Routes.Party(app);
Routes.Index(app);


module.exports = app