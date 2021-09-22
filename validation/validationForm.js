const Joi = require('joi');

exports.validationRegisterAdmin = data => {
    const schema = Joi.object({
        nom: Joi.string().required().min(3).max(20),
        prenom: Joi.string().required().min(3).max(20),
        email: Joi.string().email().required(),
        role: Joi.string(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)
}
exports.validationRegisterClient = data => {
    const schema = Joi.object({
        nom: Joi.string().required().min(3).max(20),
        prenom: Joi.string().required().min(3).max(20),
        address: Joi.string().required(),
        tel: Joi.string().required(),
        ville: Joi.string().required(),
        valid: Joi.boolean(),
        email: Joi.string().email().required(),
        codeConfirmation: Joi.number(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)
}
exports.validationRegisterVendeur = data => {
    const schema = Joi.object({
        nom: Joi.string().required().min(3).max(20),
        prenom: Joi.string().required().min(3).max(20),
        address: Joi.string().required(),
        tel: Joi.string().required(),
        ville: Joi.string().required(),
        codePostal: Joi.string().required(),
        valid: Joi.boolean(),
        email: Joi.string().email().required(),
        startPack: Joi.string(),
        endPack: Joi.string(),
        pack: Joi.string(),
        listing: Joi.number(),
        codeConfirmation: Joi.number(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)
}
exports.validationAddProduct = data => {
    const schema = Joi.object({
        title: Joi.string().required(),
        shortD: Joi.string().required(),
        longD: Joi.string().required(),
        initialPrice: Joi.number().required(),
        soldPrice: Joi.number().required(),
        imgPrincipal: Joi.string(),
        images: Joi.string(),
        stock: Joi.number().required(),
        livreur: Joi.boolean(),
        etat: Joi.string(),
        idVendeur: Joi.string(),
        idLivreur: Joi.string(),
    })
    return schema.validate(data)
}

exports.validationUpdateUser = data => {
    const schema = Joi.object({
        username: Joi.string().min(4).max(20),
        email: Joi.string().email(),
        role: Joi.string(),
        password: Joi.string().min(6)
    })
    return schema.validate(data)
}

exports.validationLogin = data => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6)
    })
    return schema.validate(data)

}