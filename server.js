const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
 res.send('this is your first page')
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));

module.exports = {app};