const express = require('express');
const router = express.Router();
const cors = require('cors');
const Recruteur = require('../models/Recruteur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var config = require('./config');


router.use(cors());

router.post('/Register', (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    let email = req.body.email;
    const company = req.body.company;
    let password = req.body.password;

    if (!nom) {
        res.status(400).send({
            message : "enter name"
        })
    }
    if (!prenom) {
        res.status(400).send({
            message : "enter prenom"
        })
    }
    if (!email) {
        res.status(400).send({
            message:"enter email"
        })
    }
    if (!password) {
        res.status(400).send({
            message : "enter password"
        })
    }
    email = email.toLowerCase();
    Recruteur.findOne({email : email, company : company}, (err, recruteur) => {
        if (err) {
            res.status(400).send({
                message : "error from the server"
            });
        }
        if (recruteur) {
            res.status(400).send({
                message : "Recruteur already exist"
            })
        }
        password = bcrypt.hashSync(password, 10);
        const newRecruteur = new Recruteur({nom, prenom, email, company, password});
        console.log(newRecruteur);
        newRecruteur.save((err) => {
            if (err) return handleError(err);
            res.status(200).send({
                message : "Saved"
            })

        })
    });

})


router.post('/Login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!email) {
        res.status(400).send({
            message : "Need email"
        })
    }
    if (!password) {
        res.status(400).send({
            message : "Need password"
        })
    }
    Recruteur.findOne({email : email})
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(password, user.password)) {
                    const payload = {
                        _id : user._id,
                        prenom : user.prenom,
                        nom : user.nom,
                        email : user.email,
                        company : user.company,
                    }
                    let token = jwt.sign(payload, config.secret, {expiresIn : 864000});
                        res.status(200).send({
                            token : token
                        })
                }
                else {
                    res.status(400).send({
                        message : "Mot de pass incorrect"
                    })
                }
            }
            else {
                res.status(400).send({
                    message: "Recruteur doesn't exist"
                })
            }

        })
        .catch(err => {

            res.status(400).send({
                message : "Error from the server1"
            })
        })
})

router.post('/RecruteurHome', (req, res) => {
    var decode = jwt.verify(req.headers['x-access-token'], config.secret);
    Recruteur.findOne({
        _id: decode._id,
        prenom : decode.prenom,
        nom : decode.nom,
        email: decode.email,
        company : decode.company

    })
        .then(user => {
            if (user) {
                res.json(user)
            }
            else {
                res.status(400).send({message : "User doesn't exist"});
            }
        })
        .catch(err => {
            res.status(400).send({message : "error from the server la ptn"});
        })
})

module.exports = router;