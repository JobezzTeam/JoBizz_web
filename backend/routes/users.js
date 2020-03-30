const express = require('express');
const router = express.Router();
const cors = require('cors');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var config = require('./config');
var ip = require('ip');
var os = require( 'os' );
const wer = require('wer')
var ip2location = require('ip-to-location');




router.use(cors());

router.post("/Register", (req, res) => {
    const prenom = req.body.FirstName;
    const nom = req.body.LastName;
    let email = req.body.Email;
    let password = req.body.Password;

    Email = Email.toLowerCase();
    if (!prenom || prenom.length < 2 || prenom.length > 25)
        return res.status(401).send("Need FirstName");
    if (!email)
        return res.status(401).send("Need Email");
    if (!nom || nom.length < 2 || nom.length > 25)
        return res.status(401).send("Need LastName");
    if (!Password || Password.length < 8 || password.length > 20)
        return res.status(401).send("Need Password");
    User.findOne({email : email})
        .then(user => {
            if (user)
                return res.status(400).send("already exist");
            else {
                password = bcrypt.hashSync(password, 10);
                const newUser = new User({nom, prenom, email, password})
                newUser.save()
                    .then(user => {
                        console.log(user);
                        res.status(200).send("User Registered")
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(502).send("Error on server")
                    })
                }
        })
        .catch(err => {
            console.log(err);
            res.status(502).send("Error on server")
        })
});

router.post('/login', (req, res) => {           //route vers le login
    const password = req.body.password;               //recuperation de l'input password
    let email = req.body.email;
    
    if (!email || !password)
        return res.status(401).send("need email or password");
    //recuperaton de l'input email
    email = email.toLowerCase();
    User.findOne({email: email})                //findOne permet de trouver le PREMIER email dans la db
        .then(user => {                 //promesse si ca marche
            if (user) {                         //si il trouve
                if (bcrypt.compareSync(password, user.password)) {   //comparaison pour voir si le mdp est correcte
                    //création du contenu des information dans le token
                    const payload = {
                        _id: user._id,
                        prenom : user.prenom,
                        nom : user.nom,
                        email: user.email
                }
                let token = jwt.sign(payload, config.secret, {expiresIn: 86400}); //création du token
                    res.status(200).send({
                        token: token
                    });
                }
                else {
                    return res.status(401).send("err")
                }
            }
            else {
                return res.status(401).send("No user")
            }
        })
        .catch(err => {                     //condition d'erreur pour eviter de timeout pendant la requete
            res.status(400).send({
                success:false,
                message:"Error"
            })
        })
});

router.get('/UserPage', (req, res) => {
    var decode = jwt.verify(req.headers['x-access-token'], config.secret);
    User.findOne({
        _id: decode._id,
        prenom : decode.prenom,
        nom : decode.nom,
        email: decode.email

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

router.get('/logout', (req, res) => {
    res.status(200).send({
        token: null
    });
})

router.get('/localisation', async (req, res) => {
    console.log(ip.address())
    var networkInterfaces = os.networkInterfaces( );
    ip2location.fetch(ip.address()).then(res => {
        console.log(res);
    });
})

module.exports = router;


