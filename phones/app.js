var express = require('express')
var app = express()
var cors = require('cors');

const port = 3001

app.use('/images', express.static('images'))
app.use(cors());
app.use('/phones', express.static('phones'));

app.get('/', function(req, res) {
    res.send('.jsons in /phones');
  });

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
    })

module.exports = app;