const Admin = require('../models/Admin');
const Client = require('../models/Client');
const Vendeur = require('../models/Vendeur');
const Livreur = require('../models/Livreur');
const Customer = require('../models/Customer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationLogin } = require('../validation/validationForm')
const {users} =require('../functions/functions');
/**
 * @param login user
 * @param check validation form by joi
 * @param compare hashed password
 * @param check valid information
 */

exports.loginUser = async (req, res) => {
    const { error } = validationLogin(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    try {
        const { email, password } = req.body;
        // compare email
        
        const user = await users(Admin, Client, Livreur, Vendeur, Customer, email)
        if (!user) return res.status(400).json('Invalid email or password!');
        // compare password given with password in database
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json('Invalid email or password!');


        //create a token
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.SECRET_TOKEN, { expiresIn: process.env.EXPIRATION_IN })
        return res.status(200).cookie('auth_token', token, { maxAge: process.env.EXPIRATION_IN, httpOnly: true }).json({ role: user.role, isAuthenticated: true });

    } catch (err) {
        res.status(400).json({ error: 'bad request' });
    }

}


/**
 *  
 * @param {clear cookie from browser} res 
 */

exports.logout = (req, res) => {
    res.status(200).clearCookie('auth_token')
        .json({ role: null, isAuthenticated: false, logout: true })
}