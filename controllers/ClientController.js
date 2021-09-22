const Admin = require('../models/Admin');
const Client = require('../models/Client');
const Livreur = require('../models/Livreur');
const Customer = require('../models/Customer');
const Vendeur = require('../models/Vendeur');
const Validation = require('../models/Validation');
const {users} = require('../functions/functions');
const {register, validate} = require('../functions/register');
const { validationRegisterClient } = require('../validation/validationForm');

const bcrypt = require('bcrypt');

/**
 * @param create user
 * @param check validation form by joi
 * @param hash password by bcrypt
 */

 exports.createClient = async (req, res ) => {
    await register(req, res,validationRegisterClient, Admin, Client, Livreur, Vendeur, Customer, Client, Validation)
}

exports.validClient = async (req, res)=>{
const { code } = req.body;

    const object = req.cookies.user
    const details = await Validation.findOne({ idUser: object._id });
   
    try {
        if (details.key === code){
            const validate = new Client({
                _id: object._id,
                nom: object.nom,
                prenom: object.prenom,
                email: object.email,
                tel: object.tel,
                address: object.address,
                ville: object.ville,
                valid: true,
                password: object.password
            })
            const saved = validate.save()
            if(saved) return res.status(201).clearCookie('user').json('Your account created successfuly')
        }else{
            return res.status(400).json('code doesn\'t match!');
        }
    } catch (error) {
        if(error) throw Error(error)
    }
}