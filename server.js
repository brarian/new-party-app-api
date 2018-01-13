const express = require('express');
const app = express();

//cors
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config');

app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
);
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
 res.json({message: ok});
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = {app};