const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    category:{
        type: String,
        enum: ['informatique', 'Téléphone & Tablette', 'Maison & Cuisine', 'Beauté & Santé', 'Vêtement & Chaussures', 'Electroménager', 'Autres catégories'],
        default: null
    },
    slug:{
        type: String,
        default: null

    }
})

module.exports = mongoose.model('Category', categorySchema)
