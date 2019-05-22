const express = require('express');
const router = express.Router();
const axios =require('axios');
let url = 'https://api.yelp.com/v3/businesses/search?location=';

router.get('/:price/:city/:state', (req, res) => {
    console.log(url+`${req.params.city}${req.params.state}&price=${req.params.price}`)
    axios.get(url+`${req.params.city}${req.params.state}&price=${req.params.price}`,{
        headers: {
            Authorization: 'Bearer KcWuNYqL_lqsSTcwPMcsNMIbyb5Pd0C8Ecy_PqVc6u3pzDoYOJ2BIbQZSM8Aar6BcGSonPA0kKePVoJk5i2YcFF8dNQCRo8JEZukmbXxRwYpuTGuczOrR5q34fviXHYx',
            'Content-Type': 'application/json'
        }
    })
    .then(response => { 
        res.send(response.data)
    },
    err=> {
        console.log('In the .then')
    })
    .catch(err => res.status(500).json(
        { error: err }
    ));
});


module.exports = router;