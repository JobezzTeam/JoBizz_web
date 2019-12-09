let mongoose = require('mongoose');
let RecruteurSchema = new mongoose.Schema({
    nom : {
        type : String,
        required : true
    },
    prenom :{
        type : String,
        required : true
    },
    email : {
        type : String,
        required: true
    },
    company : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const Recruteur = mongoose.model('Recruteur', RecruteurSchema);
module.exports = Recruteur;