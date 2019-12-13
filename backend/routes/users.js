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

router.post('/register',(req, res, err) => {
    const prenom = req.body.prenom;         //recuperation  du name input
    const nom = req.body.nom;               //Nom
    let email = req.body.email;             //recuperation de l'email
    let password = req.body.password;     //recuperation du password

    ///verification des champs //////
    if (!prenom) {
        return res.send({
            success:false
        })
    }
    if (!nom) {
        return res.send({
            success:false
        })
    }
    if (!email) {
        return res.send({
            success:false
        })
    }
    if (!password) {
        return res.send({
            success:false
        })
    }
    email = email.toLowerCase();                            //mettre en lowercase l'email
    User.findOne({email: email}, (err, user) => {           //utilisationj de la fonction FindOne pour trouver si l'email est deja existant
        if (err) {                                          //catch une err
            return res.send({
                success:false,
                status:400,
                message:'Error from server'
            });
        }
        if (user) {                                         //si findOne trouve un email, on renvoie utilisateur deja existant
            return res.send({
                success:false,
                status:400,
                message:'User already exist'
            });
        }
        password = bcrypt.hashSync(password, 10);
        const newUser = new User({nom, prenom, email, password});//on stock les info dans NewUser
        console.log(password);
        newUser.save((err) => {//la fonction save permet de sauvegarder les donnée dans la base de donné
            res.send({
                success:true,
                status:200,
                message:'User register done'
            })
        })
    })
});

router.post('/login', (req, res) => {           //route vers le login
    password = req.body.password;               //recuperation de l'input password
    email = req.body.email;                     //recuperaton de l'input email
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
                else                                    //sinon ta un mauvais mdp
                    res.status(400).send({
                        success:false,
                        message:"Failed to connect"
                    })
            }
            else if (!user) {                           //sinon ton email n'existe pas
                res.status(400).send({
                    success: false,
                    message: "User doesn't exist"
                })
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


