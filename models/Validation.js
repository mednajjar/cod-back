const mongoose = require('mongoose');

const validationSchema = mongoose.Schema({
    idUser: {type: mongoose.Schema.Types.ObjectId, ref: 'Validation'},
    key: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Validation', validationSchema);