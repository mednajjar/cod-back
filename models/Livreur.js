const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const livreurSchema = mongoose.Schema({
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
        default: 'livreur'
    },
    cin: [Object],
    permis: [Object],
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
livreurSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Livreur', livreurSchema);