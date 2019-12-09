const express = require('express');
const router = express.Router();
const cors = require('cors');
const Recruteur = require('../models/Recruteur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
        newRecruteur.save()
            .then(recruteur => {
                if (recruteur) {
                    res.status(200).status({
                        message : "ok"
                    })
                }
            })
            .catch(err => {
                res.status(400)
            })
    });

})


router.post('/login', (req, res) => {

})

module.exports = router;