const express = require('express');
const router = express.Router();
const cors = require('cors');
const Annonce = require('../models/Annonce');
var NodeGeocoder = require('node-geocoder');

router.use(cors());
router.post('/sendJob', (req, res) => {
    const desc = req.body.desc;
    const title = req.body.title;
    const price = req.body.price;
    let address = req.body.address;
    const country = req.body.country;
    const zipcode = req.body.zipcode;
    const company = req.body.company;
    var lat = undefined;
    var lon = undefined;
    var options = {
      provider: 'locationiq',
      httpAdapter: 'https',
      apiKey: '79df4ba28e3554', // for Mapquest, OpenCage, Google Premier
      formatter: null         // 'gpx', 'string', ...
    };
    var geocoder = NodeGeocoder(options);
    if (!zipcode) {
      res.status(400).send({
        message : "zipcode not found"
      })
    }
    if (!country) {
      res.status(400).send({
        message : "country not found"
      })
    }
    if (!desc) {
      res.status(400).send({
        message : "Post not found"
      })
    }
    if (!title) {
      res.status(400).send({
        message : "title not found"
      })
    }
    if (!price) {
      res.status(400).send({
        message : "Price not found"
      })
    }
    if (!address) {
      res.status(400).send({
        message : "address not found"
      })
    }
    if (!company) {
      res.status(400).send({
        message : "company not found"
      })
    }
    geocoder.geocode({address: address, country: country, zipcode: zipcode}, function(err, result) {
      console.log(result[0].latitude);
      console.log(result[0].longitude);
      lat = result[0].latitude;
      lon = result[0].longitude;
      const newJob = new Annonce({desc, title, price, address, company, country, zipcode, lat, lon});
      newJob.save((err) => {
        res.status(200).send({
          message : "Job sent to db"
        })
      })
  });
});

router.get('/getJob', (req, res) => {
  Annonce.find(function(err, annonce){
        if (err){
            res.send(err);
          }
        res.json(annonce);
  });
})




module.exports = router;
