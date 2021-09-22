const Admin = require('../models/Admin');
const Client = require('../models/Client');
const Livreur = require('../models/Livreur');
const Customer = require('../models/Customer');
const Vendeur = require('../models/Vendeur');
const Category = require('../models/Category');
const bcrypt = require('bcrypt');
const { validationRegisterAdmin, validationUpdateUser } = require('../validation/validationForm')
const {users} = require('../functions/functions')

/**
 * @param get all users
 */

exports.getUsers = async (req, res) => {
    try {
        const client = await Client.find().select('-password')
        if (client) return res.status(200).json(client)
    } catch (err) {
        throw err;
    }
}

/**
 * @param create user
 * @param check validation form by joi
 * @param hash password by bcrypt
 */

exports.createAdmin = async (req, res) => {
    
    const { error } = validationRegisterAdmin(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        const { email, password } = req.body;
        const user = new Admin({
            ...req.body
        })
        const emailExist = await users(Admin, Client, Livreur, Vendeur, email)
        if (emailExist) return res.json('Email already used!');
        // check confirmation password if you use it on form
        // if(password !== confirmPassword) return res.status(400).json('confirmation password not match to origin!');
        const hashPass = await bcrypt.hash(password, 12);
        if (hashPass) user.password = hashPass;
        const save = user.save();
        if (save) res.status(201).json('user created!');
    } catch (err) {
        throw err;
    }
}

/**
 * @param update user
 * @param check validation form by joi
 * @param hash given password
 */

// exports.updateUser = async (req, res) => {
//     const { error } = validationUpdateUser(req.body);
//     if (error) return res.status(400).json(error.details[0].message);
//     try {
//         if (req.body.password) {
//             const hashPass = await bcrypt.hash(req.body.password, 12);
//             if (hashPass) req.body.password = hashPass;
//         }
//         const updateUser = await User.updateOne({ _id: req.params.id }, { ...req.body });
//         if (updateUser) return res.status(201).json('user updated successfully');
//     } catch (err) {
//         throw err;
//     }
// }

/**
 * @param delete user by id
 */

// exports.deleteUser = async (req, res) => {
//     try {
//         const user = await User.deleteOne({ _id: req.params.id });
//         if (user) return res.status(200).json('user deleted');
//     } catch (err) {
//         throw err;
//     }
// }

/**
 * @param create category
 */

exports.createCategory = async (req, res)=>{
    try {
        const category = new Category({
            ...req.body
        })
        const save = await category.save();
        if(save) return res.status(201).json(category)
        
    } catch (error) {
        if(error) return res.status(400).json(error.message)
    }
}

/**
 * @param get categories
 */

exports.getCategories = async (req, res)=>{
    try {
        const category = await Category.find();
        if(category) return res.status(200).json(category)  
    } catch (error) {
        if(error) return res.status(400).json(error.message)
    }
    
}

