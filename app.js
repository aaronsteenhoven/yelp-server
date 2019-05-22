
const express = require('express');
const app = express();
const yelp = require('../server-side/controllers/yelpcontroller');


const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use('/api', yelp)

app.listen(3000, function () {
    console.log(`listening on 3000`)
})