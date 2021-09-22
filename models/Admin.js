const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const adminSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    prenom: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: 'admin'
    },
    password: {
        type: String,
        required: true
    }

});
// limit access to a second time with same email
adminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', adminSchema);