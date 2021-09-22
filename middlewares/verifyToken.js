const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

exports.verifToken = (type, model) => (req, res, next) => {
    const token = req.cookies.auth_token;
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, decodedToken) => {
            if (!err && decodedToken.role === type) {
                res.auth = await model.findOne({ _id: decodedToken.id }).select('-password');
                next();
            } else {
                return res.status(404).clearCookie('auth_token')
                    .json({ Warning: 'You are not authorized' });
            }
        })
    } else {
        return res.status(400).json({ role: null, isAuthenticated: false })
    }
}


exports.isAuth = (req, res) => {
    const token = req.cookies['auth_token'];
    if (token) {
        jwt.verify(token, process.env.SECRET_TOKEN, (err, decodedToken) => {
            if (err) {
                return res.clearCookie('auth_token').json({ role: null, isAuthenticated: false });
            } else {
                return res
                    .status(200)
                    .json({ role: decodedToken.role, isAuthenticated: true });
            }
        });

    } else {
        return res.json({ role: null, isAuthenticated: false });
    }
}