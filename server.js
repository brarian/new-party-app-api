const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Config = require('./config');
const Routes = require('./routes/index')
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//cors
// const cors = require('cors');
// const { CLIENT_ORIGIN } = require('./config');

// app.use(
//  cors({
//   origin: CLIENT_ORIGIN
//  })
// );

mongoose.Promise = global.Promise;
mongoose.connect(Config.DATABASE_URL, err => {
	if (err) throw err
	console.log("Database connection success")
 });


Routes.User(app);
Routes.Index(app);
Routes.Party(app);

app.listen(Config.PORT, () => console.log(`listening on ${Config.PORT}`));


// let server;

// function runServer(database = Config.DATABASE_URL, port = 8080) {
//  return new Promise((resolve, reject) => {
//   mongoose.connect(database, err => {
//    if (err) {
//     return reject(err);
//    }
//    server = app.listen(port, () => {
//      console.log(`Your app is listening on port ${port}`);
//      resolve();
//     })
//     .on('error', err => {
//      mongoose.disconnect();
//      reject(err);
//     });
//   });
//  });
// }

// function closeServer() {
//  return mongoose.disconnect().then(() => {
//   return new Promise((resolve, reject) => {
//    console.log('Closing server');
//    server.close(err => {
//     if (err) {
//      return reject(err);
//     }
//     resolve();
//    });
//   });
//  });
// }


module.exports = { app };