
const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('home.ejs');
});
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(3000, function () {
    console.log('what up brah')
});