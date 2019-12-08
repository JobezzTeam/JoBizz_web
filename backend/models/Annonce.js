let mongoose = require('mongoose');         //schema d'organisation de notre base de donnée mongodb
let AnnonceSchema = new mongoose.Schema({
    desc: {
        type : String,
        required : true
    },
    title : {
      type : String,
      required : true
    },
    price : {
      type : String,
      required : true
    },
    address : {
      type : String,
      required : true
    },
    zipcode : {
      type : String,
      required : true
    },
    country : {
      type : String,
      required : true
    },
    company : {
      type : String,
      required : true
    },
    lat : {
      type : String,
      required : true
    },
    lon : {
      type : String,
      required :true
    }
});
const Annonce = mongoose.model('Annonce', AnnonceSchema);    //creation de l'objet User pour l'utiliser les 3 bails
module.exports = Annonce; //exporter pour l'utiliser dans d'autre fichier
