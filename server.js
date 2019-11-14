const unirest = require('unirest');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('home.ejs');
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function () {
    console.log('bruh yall too highspeed for me g :,/')
});