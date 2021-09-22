const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const vendeurSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    ville: {
        type: String,
        required: true,
    },
    codePostal: {
        type: String,
        required: true,
    },
    valid: {
        type: Boolean,
        default: false,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'vendeur'
    },
    startPack:{
        type: String,
        default: null,
       
    },
    endPack:{
        type: String,
        default: null,
    
    },
    pack:{
        type: String,
        enum:[null, 'free', 'standard', 'premium'],
        default: null,
    },
    listing:{
        type: Number,
        default: null,
    },
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
vendeurSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Vendeur', vendeurSchema);