const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    idVendeur:{type: mongoose.Schema.Types.ObjectId, ref: 'Vendeur'},
    idLivreur:{type: mongoose.Schema.Types.ObjectId, ref: 'Livreur', default: null},
    idCategory:{type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null},
    title: {
        type: String,
        required: true,
    },
    shortD: {
        type: String,
        required: true,
    },
    longD: {
        type: String,
        required: true,
    },
    initialPrice: {
        type: Number,
        required: true,
    },
    soldPrice: {
        type: Number,
        required: true,
    },
    imgPrincipal: {
        type: String,
        required: true,
    },
    images: [Object],
    stock: {
        type: Number,
        required: true,
    },
    livreur: {
        type: Boolean,
        default: false,
    },
    etat: {
        type: String,
        enum: ['online', 'offList'],
        default: 'online'
    }

});


module.exports = mongoose.model('Product', productSchema);